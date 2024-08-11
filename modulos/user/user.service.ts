import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { userEntity } from "src/entity/user.entity";
import { Repository } from "typeorm";



@Injectable()
export class userService {
    constructor(@InjectRepository(userEntity) private userRepository: Repository<userEntity>) {}

    findAll(): Promise<userEntity[]> {
        return this.userRepository.find();
      }
}