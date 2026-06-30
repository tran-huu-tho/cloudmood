import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateItineraryDto } from './dto/create-itinerary.dto';
import { UpdateItineraryDto } from './dto/update-itinerary.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ItinerariesService {
  constructor(private prisma: PrismaService) {}

  async create(createItineraryDto: CreateItineraryDto) {
    return this.prisma.itinerary.create({
      data: {
        ...createItineraryDto,
        userId: BigInt(createItineraryDto.userId),
        days: createItineraryDto.days ? BigInt(createItineraryDto.days) : null,
        budget: createItineraryDto.budget ? BigInt(createItineraryDto.budget) : null,
      },
      include: {
        user: {
          select: {
            id: true,
            fullName: true,
            avatar: true,
          },
        },
      },
    });
  }

  async findAll() {
    return this.prisma.itinerary.findMany({
      include: {
        user: {
          select: {
            id: true,
            fullName: true,
            avatar: true,
          },
        },
        details: {
          include: {
            place: true,
          },
        },
      },
    });
  }

  async findOne(id: number) {
    const itinerary = await this.prisma.itinerary.findUnique({
      where: { id: BigInt(id) },
      include: {
        user: {
          select: {
            id: true,
            fullName: true,
            avatar: true,
          },
        },
        details: {
          include: {
            place: {
              include: {
                category: true,
              },
            },
          },
        },
      },
    });

    if (!itinerary) {
      throw new NotFoundException(`Itinerary #${id} not found`);
    }

    return itinerary;
  }

  async update(id: number, updateItineraryDto: UpdateItineraryDto) {
    await this.findOne(id);

    const data: any = { ...updateItineraryDto };
    if (updateItineraryDto.userId) {
      data.userId = BigInt(updateItineraryDto.userId);
    }
    if (updateItineraryDto.days) {
      data.days = BigInt(updateItineraryDto.days);
    }
    if (updateItineraryDto.budget) {
      data.budget = BigInt(updateItineraryDto.budget);
    }

    return this.prisma.itinerary.update({
      where: { id: BigInt(id) },
      data,
      include: {
        user: {
          select: {
            id: true,
            fullName: true,
            avatar: true,
          },
        },
        details: {
          include: {
            place: true,
          },
        },
      },
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.itinerary.delete({
      where: { id: BigInt(id) },
    });
  }
}
