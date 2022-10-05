import { UserRepositories } from '../database/repositories/UserRepositories';
export declare class SessionServices {
    userRepositories: UserRepositories;
    constructor();
    login(email: string): Promise<any[]>;
}
