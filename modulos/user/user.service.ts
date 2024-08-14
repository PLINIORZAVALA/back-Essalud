import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {userEntity} from 'src/entity/user.entity';

@Injectable()
export class UserService {

    //Obtenemos los datos mediante el constructor
    constructor(
        @InjectRepository(userEntity)
        private UserRepository: Repository<userEntity>,
      ) {}

      //Obtemos todos los datos del arreglo
      findAll(): Promise<userEntity[]> {
        return this.UserRepository.find();
      }

    //Obtenemos los datos mediante el ID   
    findOne(IdUser: number): Promise<userEntity> {
        return this.UserRepository.findOne({ where: { IdUser } });
    }
}
