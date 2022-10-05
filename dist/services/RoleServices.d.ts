import { RoleRepositories } from '../database/repositories/RoleRepositories';
export declare class RoleServices {
    roleRepositories: RoleRepositories;
    constructor();
    getById(code: number): Promise<any[]>;
}
