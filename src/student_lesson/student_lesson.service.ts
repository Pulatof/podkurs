import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateStudentLessonDto } from './dto/create-student_lesson.dto';
import { UpdateStudentLessonDto } from './dto/update-student_lesson.dto';
import { StudentLesson } from './models/student_lesson.model';

@Injectable()
export class StudentLessonService {
  constructor(
    @InjectModel(StudentLesson) private readonly student_lessonRepo:typeof StudentLesson
  ){}
  async create(createStudentLessonDto: CreateStudentLessonDto) {
    const student_lesson = await this.student_lessonRepo.create(createStudentLessonDto)
    return student_lesson
  }

  findAll() {
    return this.student_lessonRepo.findAll({include:{all:true}})
  }

  async findOne(id: number) {
    const student_lesson = await this.student_lessonRepo.findOne({where:{id}})
    if (!student_lesson){
      throw new BadRequestException('student_lesson not found')
    }
    return student_lesson
  }

  async update(id: number, updateStudentLessonDto: UpdateStudentLessonDto) {
    const student_lesson = await this.student_lessonRepo.findOne({where:{id}})
    if (!student_lesson){
      throw new BadRequestException('student_lesson not found')
    }
    const updatedStudentLesson = await this.student_lessonRepo.update(
      {...updateStudentLessonDto},
      {where:{id}, returning:true})
      const response={
        message:'student_lesson updated succesully',
        student_lesson: updatedStudentLesson[1][0]
      }
      return response
  }
  

  async remove(id: number) {
    const student_lesson = await this.student_lessonRepo.findOne({where:{id}})
    if (!student_lesson){
      throw new BadRequestException('student_lesson not found')
    }
    await this.student_lessonRepo.destroy({where:{id}})
    const response={
      message:'student_lesson removed succesfully',
      StudentLessonID:id
    }
    return response
  }
}
