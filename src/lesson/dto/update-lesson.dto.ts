import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { CreateLessonDto } from './create-lesson.dto';

export class UpdateLessonDto{
    @ApiProperty({
        example: 'user familiasi',
        description: 'Foydalanuvchi familiasi & Lastname of user',
      })

      // @IsNotEmpty()
      @IsString()
      @IsOptional()
      lesson_theme?: string;
    
      @ApiProperty({
        example: '01.01.2000',
        description: 'Foydalanuvchi tugilgan sanasii',
      })

      // @IsNotEmpty()
      @IsNumber()
      @IsOptional()
      lesson_number?: number;
    
      @ApiProperty({
        example: '01.01.2000',
        description: 'Foydalanuvchi tugilgan sanasii',
      })

      // @IsNotEmpty()
      @IsNumber()
      @IsOptional()
      group_id?: number;
    
      @ApiProperty({
        example: '01.01.2000',
        description: 'Foydalanuvchi tugilgan sanasii',
      })

      // @IsNotEmpty()
      @IsDateString()
      @IsOptional()
      lesson_date?: Date;
}
