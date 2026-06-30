import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePlaceDto } from './dto/create-place.dto';
import { UpdatePlaceDto } from './dto/update-place.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PlacesService {
  constructor(private prisma: PrismaService) {}

  async create(createPlaceDto: CreatePlaceDto) {
    return this.prisma.place.create({
      data: {
        ...createPlaceDto,
        categoryId: BigInt(createPlaceDto.categoryId),
        openTime: new Date(createPlaceDto.openTime),
        closeTime: new Date(createPlaceDto.closeTime),
      },
      include: {
        category: true,
      },
    });
  }

  async findAll() {
    return this.prisma.place.findMany({
      include: {
        category: true,
        reviews: true,
      },
    });
  }

  async findOne(id: number) {
    const place = await this.prisma.place.findUnique({
      where: { id: BigInt(id) },
      include: {
        category: true,
        reviews: {
          include: {
            user: {
              select: {
                id: true,
                fullName: true,
                avatar: true,
              },
            },
          },
        },
      },
    });

    if (!place) {
      throw new NotFoundException(`Place #${id} not found`);
    }

    return place;
  }

  async update(id: number, updatePlaceDto: UpdatePlaceDto) {
    await this.findOne(id);

    const data: any = { ...updatePlaceDto };
    if (updatePlaceDto.categoryId) {
      data.categoryId = BigInt(updatePlaceDto.categoryId);
    }
    if (updatePlaceDto.openTime) {
      data.openTime = new Date(updatePlaceDto.openTime);
    }
    if (updatePlaceDto.closeTime) {
      data.closeTime = new Date(updatePlaceDto.closeTime);
    }

    return this.prisma.place.update({
      where: { id: BigInt(id) },
      data,
      include: {
        category: true,
      },
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.place.delete({
      where: { id: BigInt(id) },
    });
  }
}
