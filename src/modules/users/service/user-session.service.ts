import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserSession } from '../schemas/user-session.schema';
@Injectable()
export class UserSessionService {
    constructor(@InjectModel(UserSession.name) private userSessionModel: Model<UserSession>) {}
    async handleSaveTokenLogin(sessionData: { user_id: string, device_info: string, refresh_token: string, access_token:string, ip_address: string }) {
        const existingSession = await this.userSessionModel.findOne({
            user_id: sessionData.user_id,
            device_info: sessionData.device_info,
        });
        if (existingSession) {
            existingSession.refresh_token = sessionData.refresh_token;
            existingSession.access_token = sessionData.access_token;
            existingSession.ip_address = sessionData.ip_address;
            await existingSession.save();
        }else {
            await this.userSessionModel.create(sessionData)
        }
     
    }
}
