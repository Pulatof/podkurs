import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateTargetDto {


    @ApiProperty({
        example: 'foydalanuvchi niki',
        description: 'Foydalanuvchi nikneymi',
      })
      @IsNotEmpty()
      @IsString()
      name: string;
}
