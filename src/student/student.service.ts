import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';
import { CreateStudentDto } from './dto/create-student.dto';
import { FindStudentDto } from './dto/find-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './models/student.model';

@Injectable()
export class StudentService {
  constructor(
    @InjectModel(Student) private readonly studentRepo: typeof Student,
  ) {}
  async create(createStudentDto: CreateStudentDto) {
    const student = await this.studentRepo.create(createStudentDto);
    return student;
  }

  findAll() {
    return this.studentRepo.findAll({ include: { all: true } });
  }

  async findOne(id: number) {
    const student = await this.studentRepo.findOne({ where: { id } });
    if (!student) {
      throw new BadRequestException('student not found');
    }
    return student;
  }

  async update(id: number, updateStudentDto: UpdateStudentDto) {
    const student = await this.studentRepo.findOne({ where: { id } });
    if (!student) {
      throw new BadRequestException('student not found');
    }
    const updatedStudent = await this.studentRepo.update(
      { ...updateStudentDto },
      { where: { id }, returning: true },
    );
    const response = {
      message: 'student updated succesully',
      student: updatedStudent[1][0],
    };
    return response;
  }

  async remove(id: number) {
    const student = await this.studentRepo.findOne({ where: { id } });
    if (!student) {
      throw new BadRequestException('student not found');
    }
    await this.studentRepo.destroy({ where: { id } });
    const response = {
      message: 'student removed succesfully',
      StudentID: id,
    };
    return response;
  }

  async getByParam(findStudentDto: FindStudentDto) {
    const params = { ...findStudentDto };
    console.log(params);
    const where: any = {};
    if (params.first_name) {
      where.first_name = { [Op.like]: `%${params.first_name}%` };
    }
    if (params.last_name) {
      where.last_name = { [Op.like]: `%${params.last_name}%` };
    }
    if (params.phone_number) {
      where.phone_number = {
        [Op.like]: `%${params.phone_number.trimStart()}%`,
      };
    }
    if (params.birthday) {
      where.birthday = { [Op.eq]: new Date(params.birthday) };
    }
    const lid = await this.studentRepo.findAll({
      where: where,
    });
    return lid;
  }
}
