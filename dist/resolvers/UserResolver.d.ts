import { UserServices } from '../services/UserServices';
import { NewUserInput } from '../input/NewUserInput';
export declare class UserResolver {
    userServices: UserServices;
    constructor();
    users(): Promise<any[] | Error>;
    createUser(newUserInput: NewUserInput): Promise<number | Error>;
    updateUser(id: number, name: string, email: string, password: string): Promise<number | Error>;
    deleteUser(code: number): Promise<boolean>;
}
