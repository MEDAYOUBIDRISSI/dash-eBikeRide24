import { User } from "../classe/user.class";

export interface Chat
{
    _id ?: number;
    fromUser:User;
    toUser:User;
    message:string;
    updatedAt?:any;
}