import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from './service/user.service';
import { User, UserSchema } from './schemas/user.chema';


@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
  providers: [UserService],
  exports: [UserService, MongooseModule]

})
export class UsersModule {}
