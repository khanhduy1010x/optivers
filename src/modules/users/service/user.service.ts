import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../schemas/user.chema';
@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) {}
    async findOne(username: string): Promise<User | null> {
        return this.userModel.findOne({email: username}).lean(); 
    }
}
