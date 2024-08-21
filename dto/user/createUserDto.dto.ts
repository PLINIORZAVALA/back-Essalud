import { IsString, IsNotEmpty, IsInt, IsEmail, IsDate, IsBoolean } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  readonly firstName: string;

  @IsString()
  @IsNotEmpty()
  readonly lastName: string;

  @IsString()
  @IsNotEmpty()
  readonly password: string;

  @IsString()
  @IsNotEmpty()
  readonly dni: string;


  @IsString()
  @IsNotEmpty()
  readonly phoneNumber: string;

  @IsEmail()
  @IsNotEmpty()
  readonly mail: string;

  @IsInt()
  @IsNotEmpty()
  readonly rol: number;

  @IsDate()
  @IsNotEmpty()
  readonly date: Date;

  @IsBoolean()
  @IsNotEmpty()
  readonly indActive: boolean;
}
