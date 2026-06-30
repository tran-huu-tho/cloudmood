import { IsString, IsNumber, IsDateString } from 'class-validator';

export class CreatePlaceDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  latitude: string;

  @IsString()
  longitude: string;

  @IsString()
  address: string;

  @IsString()
  price: string;

  @IsDateString()
  openTime: string;

  @IsDateString()
  closeTime: string;

  @IsNumber()
  categoryId: number;

  @IsString()
  image: string;
}
