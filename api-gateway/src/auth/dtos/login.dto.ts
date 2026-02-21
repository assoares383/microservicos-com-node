import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, MinLength } from "class-validator";

export class LogiinDto {
  @ApiProperty({
    description: 'Email do Usuario',
    example: 'user@example.com'
  })

  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Senha do Usuario',
    example: 'password123'
  })

  @IsString()
  @MinLength(6)
  password: string;
}
