import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import {userEntity} from 'src/entity/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([userEntity])],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
