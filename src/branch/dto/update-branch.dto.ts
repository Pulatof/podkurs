import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { CreateBranchDto } from './create-branch.dto';

export class UpdateBranchDto  {
    @ApiProperty({
        example: 'user familiasi',
        description: 'Foydalanuvchi familiasi & Lastname of user',
      })
      @IsOptional()
      @IsNotEmpty()
      @IsString()
      name?: string;
    
      @ApiProperty({
        example: 'user familiasi',
        description: 'Foydalanuvchi familiasi & Lastname of user',
      })
      @IsOptional()
      @IsNotEmpty()
      @IsString()
      address?: string;
    
      @ApiProperty({
        example: 'user familiasi',
        description: 'Foydalanuvchi familiasi & Lastname of user',
      })
      @IsOptional()
      @IsNotEmpty()
      @IsString()
      call_number?: string;
}
