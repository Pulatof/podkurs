import { Module } from '@nestjs/common';
import { StudentLessonService } from './student_lesson.service';
import { StudentLessonController } from './student_lesson.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { StudentLesson } from './models/student_lesson.model';
import { Student } from 'src/student/models/student.model';
import { Lesson } from 'src/lesson/models/lesson.model';

@Module({
  imports:[SequelizeModule.forFeature([StudentLesson, Student, Lesson])],
  controllers: [StudentLessonController],
  providers: [StudentLessonService]
})
export class StudentLessonModule {}
