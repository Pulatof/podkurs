import { ApiProperty } from '@nestjs/swagger/dist';
import { IsDateString, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Column, DataType } from 'sequelize-typescript';

export class CreateLessonDto {
  @ApiProperty({
    example: 'user familiasi',
    description: 'Foydalanuvchi familiasi & Lastname of user',
  })
  @IsNotEmpty()
  @IsString()
  lesson_theme: string;

  @ApiProperty({
    example: '01.01.2000',
    description: 'Foydalanuvchi tugilgan sanasii',
  })
  // @IsNotEmpty()
  @IsNumber()
  lesson_number: number;

  @ApiProperty({
    example: '01.01.2000',
    description: 'Foydalanuvchi tugilgan sanasii',
  })
  // @IsNotEmpty()
  @IsNumber()
  group_id: number;

  @ApiProperty({
    example: '01.01.2000',
    description: 'Foydalanuvchi tugilgan sanasii',
  })
  // @IsNotEmpty()
  @IsDateString()
  lesson_date: Date;
}
