import { Controller, Get } from "@nestjs/common";
import { userService } from './user.service';

@Controller('api/user')
export class userController {
    constructor(private readonly userService:userService) {}

    @Get()
    findAll() {
    return this.userService.findAll();
  }
}