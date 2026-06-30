import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PlacesModule } from './places/places.module';
import { CategoriesModule } from './categories/categories.module';
import { ReviewsModule } from './reviews/reviews.module';
import { ItinerariesModule } from './itineraries/itineraries.module';
import { AiModule } from './ai/ai.module';
import { RulesModule } from './rules/rules.module';
import { WeatherModule } from './weather/weather.module';
import { CloudinaryModule } from './cloudinary/cloudinary.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    AuthModule,
    UsersModule,
    PlacesModule,
    CategoriesModule,
    ReviewsModule,
    ItinerariesModule,
    AiModule,
    RulesModule,
    WeatherModule,
    CloudinaryModule,
  ],
})
export class AppModule {}
