import { Module } from '@nestjs/common';
import { TargetService } from './target.service';
import { TargetController } from './target.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Target } from './models/target.model';

@Module({
  imports:[SequelizeModule.forFeature([Target])],
  controllers: [TargetController],
  providers: [TargetService]
})
export class TargetModule {}
