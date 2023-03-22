import { Module } from '@nestjs/common';
import { ReasonLidService } from './reason_lid.service';
import { ReasonLidController } from './reason_lid.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { ReasonLid } from './models/reason_lid.model';

@Module({
  imports:[SequelizeModule.forFeature([ReasonLid])],
  controllers: [ReasonLidController],
  providers: [ReasonLidService]
})
export class ReasonLidModule {}
