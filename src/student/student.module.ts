import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Student } from './models/student.model';
import { Lid } from 'src/lid/models/lid.model';
import { Group } from 'src/group/models/group.model';

@Module({
  imports:[SequelizeModule.forFeature([Student, Lid, Group])],
  controllers: [StudentController],
  providers: [StudentService]
})
export class StudentModule {}
