import { Module } from '@nestjs/common';
import { StageService } from './stage.service';
import { StageController } from './stage.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Stage } from './models/stage.model';

@Module({
  imports:[SequelizeModule.forFeature([Stage])],
  controllers: [StageController],
  providers: [StageService]
})
export class StageModule {}
