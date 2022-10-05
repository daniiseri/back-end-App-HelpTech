import { User } from "../../models/User";
import { NewUserInput } from "../../input/NewUserInput";
export declare class UserRepositories {
    findAll(): Promise<any[]>;
    findUser(email: string): Promise<any[]>;
    findById(code: number): Promise<import("pg").QueryResult<any>>;
    create({ name, email, password }: NewUserInput): Promise<number>;
    update({ id, name, email, password }: User): Promise<number>;
    delete(code: number): Promise<import("pg").QueryResult<any>>;
}
