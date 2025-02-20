import { IsNotEmpty } from "class-validator";

export class LoginRequest {
    email : string;
    password : string;
    device_info: string;
    ip_address: string;
}