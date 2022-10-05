import { UserRoleRepositories } from '../database/repositories/UserRoleRepositories';
export declare class UserRoleServices {
    userRoleRepositories: UserRoleRepositories;
    constructor();
    getByUser(code: number): Promise<any[]>;
}
