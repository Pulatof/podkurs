import { Module } from '@nestjs/common';
import { LessonService } from './lesson.service';
import { LessonController } from './lesson.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Lesson } from './models/lesson.model';
import { Group } from 'src/group/models/group.model';

@Module({
  imports:[SequelizeModule.forFeature([Lesson, Group])],
  controllers: [LessonController],
  providers: [LessonService]
})
export class LessonModule {}
