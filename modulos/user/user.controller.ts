import { Controller, Get, Param } from '@nestjs/common';
import {UserService} from './user.service';
<<<<<<< HEAD
=======
import {userEntity} from 'src/entity/user.entity';
>>>>>>> 7885bd9a3ceba7e59c31ee012c77f2216c76bf1d

@Controller('user')
export class UserController {

    //Contructor para hallar los datos del service
    constructor(private readonly userService: UserService) {}

    //Método para obtener los valores del servicio
    @Get()
    findAll() {
      return this.userService.findAll();
    }

    //Obtener los datos mediante el ID
    @Get(':id')
    findOne(@Param('id') IdUser: number) {
      return this.userService.findOne(IdUser);
    }
}
