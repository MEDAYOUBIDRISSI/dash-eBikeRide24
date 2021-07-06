import { User } from "../classe/user.class";

export interface Chat
{
    _id ?: number;
    fromUser:User;
    toUser:User;
    inboxUser:User;
    chatFrom?:User;
    chatTo?:User;
    verification?:string;
    message:string;
    updatedAt?:any;
}