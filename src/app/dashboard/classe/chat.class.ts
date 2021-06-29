import { User } from "../classe/user.class";

export interface Chat
{
    _id ?: number;
    fromUser:User;
    toUser:User;
    inboxUser:User;
    message:string;
    updatedAt?:any;
}