import { Module } from '@nestjs/common';
import { GroupService } from './group.service';
import { GroupController } from './group.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Group } from './models/group.model';
import { Branch } from 'src/branch/models/branch.model';
import { Stage } from 'src/stage/models/stage.model';
import { Lesson } from 'src/lesson/models/lesson.model';
import { Stuff } from 'src/stuff/models/stuff.model';

@Module({
  imports:[SequelizeModule.forFeature([Group, Stage, Stuff, Lesson, Branch])],
  controllers: [GroupController],
  providers: [GroupService]
})
export class GroupModule {}
