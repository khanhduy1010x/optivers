import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from './service/user.service';
import { User, UserSchema } from './schemas/user.chema';
import { UserSession, UserSessionSchema } from './schemas/user-session.schema';
import { UserSessionService } from './service/user-session.service';


@Module({
  imports: [MongooseModule.forFeature([{ name: UserSession.name, schema: UserSessionSchema }])],
  providers: [UserSessionService],
  exports: [UserSessionService, MongooseModule]

})
export class UserSessionModule {}
