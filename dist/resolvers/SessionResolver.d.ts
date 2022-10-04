import { SessionServices } from "../services/SessionServices";
import { User } from "../models/User";
import { UserRoleServices } from "../services/UserRoleServices";
import { RoleServices } from "../services/RoleServices";
export declare class SessionResolver {
    sessionServices: SessionServices;
    userRoleServices: UserRoleServices;
    roleServices: RoleServices;
    constructor();
    login(email: string, password: string): Promise<Error | {
        user: User;
        roles: string[];
        token: string;
    }>;
}
