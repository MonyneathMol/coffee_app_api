import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { DrinkModule } from './drink.module';

@Module({
  imports: [ConfigModule.forRoot(), MongooseModule.forRoot(process.env.mongoURI, { useNewUrlParser: true}), DrinkModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
