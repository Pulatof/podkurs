
import { ApiProperty } from '@nestjs/swagger';
import {IsNumber, IsString } from 'class-validator';

export class AddRoleDto  {
    @ApiProperty({
        example: 'foydalanuvchi niki',
        description: 'Foydalanuvchi nikneymi',
      })

      @IsString()
      name: string;
    
      @ApiProperty({
        example: 'foydalanuvchi niki',
        description: 'Foydalanuvchi nikneymi',
      })

      @IsNumber()
      stuff_id: number;
    
}
