import { NewUserResponseInput } from '../../input/NewUserResponseInput';
export declare class UserResponseRepositories {
    findAll(): Promise<any[]>;
    findById(code: number): Promise<any[]>;
    findByUser(code: number): Promise<any[]>;
    create(data: NewUserResponseInput): Promise<number>;
    update(data: any): Promise<number>;
    delete(code: number): Promise<number>;
}
