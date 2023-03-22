import { Module } from '@nestjs/common';
import { LidService } from './lid.service';
import { LidController } from './lid.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Lid } from './models/lid.model';
import { ReasonLid } from 'src/reason_lid/models/reason_lid.model';
import { Target } from 'src/target/models/target.model';
import { LidStatus } from 'src/lid_status/models/lid_status.model';
import { Stage } from 'src/stage/models/stage.model';

@Module({
  imports:[SequelizeModule.forFeature([Lid, ])],
  controllers: [LidController],
  providers: [LidService]
})
export class LidModule {}

// ReasonLid, Target, LidStatus, Stage
