import { IsNotEmpty } from "class-validator";

export class LoginResponse {
    access_token: string;
    refresh_token: string;
}