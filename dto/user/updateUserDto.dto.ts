import { IsBoolean, IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class updateUserDto {
    @IsNumber()
    IdUser: number;
    
    @IsString()
    @IsNotEmpty()
    FirstName: string;

    @IsString()
    @IsNotEmpty()
    LastName: string;

    @IsString()
    @IsNotEmpty()
    Password: string;

    @IsString()
    @IsNotEmpty()
    Dni: string;

    @IsString()
    @IsNotEmpty()
    EmployeeCode: string;

    @IsString()
    @IsNotEmpty()
    Shift: string;

    @IsString()
    @IsNotEmpty()
    PhoneNumber: string;

    @IsString()
    @IsNotEmpty()
    Mail: string;

    @IsNumber()
    Rol: number;
    
    @IsDate()
    Date:Date;

    @IsBoolean()
    IndActive:Boolean;
}