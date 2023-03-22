import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateStudentLessonDto {
  @ApiProperty({
    example: '01.01.2000',
    description: 'Foydalanuvchi tugilgan sanasii',
  })
  @IsNotEmpty()
  @IsNumber()
  lesson_id: number;

  @ApiProperty({
    example: '01.01.2000',
    description: 'Foydalanuvchi tugilgan sanasii',
  })
  @IsNotEmpty()
  @IsNumber()
  student_id: number;

  @ApiProperty({
    example: 'foydalanuvchi niki',
    description: 'Foydalanuvchi nikneymi',
  })
  // @IsNotEmpty()
  @IsString()
  reason: string;
}
