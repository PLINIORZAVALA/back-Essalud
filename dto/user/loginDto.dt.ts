import { IsNotEmpty, IsString } from "class-validator";


export class LoginDto {
    @IsString()
    @IsNotEmpty()
    UserRequest: string;

    @IsString()
    @IsNotEmpty()
    Password: string;
}