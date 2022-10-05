import { UserRepositories } from '../database/repositories/UserRepositories';
import { NewUserInput } from '../input/NewUserInput';
import { User } from '../models/User';
export declare class UserServices {
    userRepositories: UserRepositories;
    constructor();
    getAll(): Promise<any[]>;
    getById(code: number): Promise<import("pg").QueryResult<any>>;
    create(data: NewUserInput): Promise<number>;
    update(data: User): Promise<number>;
    delete(code: number): Promise<import("pg").QueryResult<any>>;
}
