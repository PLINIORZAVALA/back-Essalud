import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {userEntity} from 'src/entity/user.entity';
import { promises } from 'dns';
import { CreateUserDto } from 'src/dto/user/createUserDto.dto';
import { updateUserDto } from 'src/dto/user/updateUserDto.dto';

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

    //Insertamos datos  al base de datos
    async insertUser(request: CreateUserDto) {
      try {

        const newUser = this.UserRepository.create({
          FirstName : request.firstName,
          LastName : request.firstName,
          Mail : request.lastName,
          Dni : request.dni,
          Date : request.date
        });
  
        // Guardar la nueva entidad de usuario en la base de datos
        await this.UserRepository.save(newUser);
  
        return { msg: 'User inserted successfully', success: true };
      } catch (error) {
        console.error('Failed to insert user:', error);
        return { msg: 'Failed to insert user', detailMsg: error, success: false };
      }
    }

    //Actualizamos los datos de la base de datos
    async updateUser(updateUserDto: updateUserDto) {
      try {
  
        await new Promise(resolve => setTimeout(resolve, 5000));
        const user = await this.UserRepository.findOne({
          where: { IdUser: updateUserDto.IdUser },
        });
        if (!user) {
          return { msg: 'User not found', success: false };
        }
  
        user.FirstName = updateUserDto.FirstName,
        user.LastName = updateUserDto.LastName,
        user.Password = updateUserDto.Password,
        user.Dni = updateUserDto.Dni,
        user.EmployeeCode = updateUserDto.EmployeeCode,
        user.Shift = updateUserDto.Shift,
        user.PhoneNumber = updateUserDto.PhoneNumber,
        user.Mail = updateUserDto.Mail,
        user.Rol = updateUserDto.Rol,
        user.Date = updateUserDto.Date,
        user.IndActive = updateUserDto.IndActive
  
        await this.UserRepository.save(user);
  
        return { msg: 'User updated successfully', success: true };
      } catch (error) {
        console.error('Failed to update user:', error);
        return { msg: 'Failed to update user', detailMsg: error, success: false };
      }
    }

    //Eliminamos datos de la base de datos
    async deleteUser(userId: number) {
      try {
        await this.UserRepository.delete(userId);
        return { msg: 'User deleted successfully', success: true };
      } catch (error) {
        console.error('Failed to delete user:', error);
        return { msg: 'Failed to delete user', detailMsg: error, success: false };
      }
    }
}
