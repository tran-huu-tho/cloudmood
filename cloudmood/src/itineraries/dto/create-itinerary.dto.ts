import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateItineraryDto {
  @IsString()
  title: string;

  @IsString()
  startDate: string;

  @IsOptional()
  @IsNumber()
  days?: number;

  @IsOptional()
  @IsNumber()
  budget?: number;

  @IsNumber()
  userId: number;
}
