import { IsString, IsNumber } from 'class-validator';

export class CreateReviewDto {
  @IsString()
  rating: string;

  @IsString()
  comment: string;

  @IsNumber()
  userId: number;

  @IsNumber()
  placeId: number;
}
