
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';


export class UpdateStudentLessonDto  {
    @ApiProperty({
        example: '01.01.2000',
        description: 'Foydalanuvchi tugilgan sanasii',
      })

      @IsNotEmpty()
      @IsNumber()
      @IsOptional()
      lesson_id?: number;
    
      @ApiProperty({
        example: '01.01.2000',
        description: 'Foydalanuvchi tugilgan sanasii',
      })

      @IsNotEmpty()
      @IsNumber()
      @IsOptional()
      student_id?: number;
    
      @ApiProperty({
        example: 'foydalanuvchi niki',
        description: 'Foydalanuvchi nikneymi',
      })

      @IsNotEmpty()
      @IsString()
      @IsOptional()
      reason?: string;
}
