import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';
import { Lesson } from './models/lesson.model';

@Injectable()
export class LessonService {
  constructor(
    @InjectModel(Lesson) private readonly lessonRepo:typeof Lesson
  ){}
  async create(createLessonDto: CreateLessonDto) {
    const lesson = await this.lessonRepo.create(createLessonDto)
    return lesson
  }

  findAll() {
    return this.lessonRepo.findAll({include:{all:true}})
  }

  async findOne(id: number) {
    const lesson = await this.lessonRepo.findOne({where:{id}})
    if (!lesson){
      throw new BadRequestException('lesson not found')
    }
    return lesson
  }

  async update(id: number, updateLessonDto: UpdateLessonDto) {
    const lesson = await this.lessonRepo.findOne({where:{id}})
    if (!lesson){
      throw new BadRequestException('lesson not found')
    }
    const updatedLesson = await this.lessonRepo.update(
      {...updateLessonDto},
      {where:{id}, returning:true})
      const response={
        message:'lesson updated succesully',
        lesson: updatedLesson[1][0]
      }
      return response
  }
  

  async remove(id: number) {
    const lesson = await this.lessonRepo.findOne({where:{id}})
    if (!lesson){
      throw new BadRequestException('lesson not found')
    }
    await this.lessonRepo.destroy({where:{id}})
    const response={
      message:'lesson removed succesfully',
      LessonID:id
    }
    return response
  }
}
