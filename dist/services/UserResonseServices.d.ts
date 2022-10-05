import { UserResponseRepositories } from "../database/repositories/UserResponseRepositories";
import { NewUserResponseInput } from "../input/NewUserResponseInput";
export declare class UserResponseServices {
    userResponseRepositories: UserResponseRepositories;
    constructor();
    getAll(): Promise<any[]>;
    getByUser(code: number): Promise<any[]>;
    create(newUserResponseInput: NewUserResponseInput): Promise<number>;
    update(data: any): Promise<number>;
    delete(code: number): Promise<number>;
}
