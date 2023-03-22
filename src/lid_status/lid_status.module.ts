import { Module } from '@nestjs/common';
import { LidStatusService } from './lid_status.service';
import { LidStatusController } from './lid_status.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { LidStatus } from './models/lid_status.model';

@Module({
  imports:[SequelizeModule.forFeature([LidStatus, ])],
  controllers: [LidStatusController],
  providers: [LidStatusService]
})
export class LidStatusModule {}
