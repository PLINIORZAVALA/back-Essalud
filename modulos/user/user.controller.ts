import { Controller, Get, Param } from '@nestjs/common';
import {UserService} from './user.service';

import {userEntity} from 'src/entity/user.entity';

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
