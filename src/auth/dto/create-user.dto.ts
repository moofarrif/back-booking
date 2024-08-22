import { IsEmail, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;
  @IsString()
  name: string;
  // @MinLength(6, { message: 'debe ser minimo de 6 caracteres' })
  @MinLength(6)
  password: string;
}
