import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FocusSession } from './schemas/focus-session.schema';


@Module({
  imports: [MongooseModule.forFeature([{ name: FocusSession.name, schema: FocusSession }])],

})
export class FocusSessionModule {}
