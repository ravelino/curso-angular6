import { UserInterface } from "../../interface/user/user.interface";

export class UserModel implements UserInterface {

    

    name: string;
    photo: string;
    description: string;
    balance: string;
    bithday: string;
}