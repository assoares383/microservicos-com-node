import { IsEmail, IsOptional, IsString, MinLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

enum Role {
  USER = 'user',
  ADMIN = 'admin',
  CUSTOMER = 'customer'
}

export class RegisterDto {
  @IsEmail()
  @ApiProperty({
    description: 'Email do Usuario',
    example: 'user@example.com'
  })
  email: string;

  @ApiProperty({
    description: 'Senha do Usuario',
    example: 'password123'
  })
  @IsString()
  @MinLength(6)
  password: string;

  @ApiProperty({
    description: 'Primeiro nome do Usuario',
    example: 'John'
  })
  @IsString()
  firstName: string;

  @ApiProperty({
    description: 'Sobrenome do Usuario',
    example: 'Doe'
  })
  @IsString()
  lastName: string;

  @ApiProperty({
    description: 'Role do Usuario',
    example: 'user',
    enum: ['user', 'admin', 'customer'],
    required: false
  })
  @IsOptional()
  @IsString()
  role: Role = Role.USER;
}
