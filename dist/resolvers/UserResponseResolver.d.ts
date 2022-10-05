import { NewUserResponseInput } from "../input/NewUserResponseInput";
import { UserResponseServices } from "../services/UserResonseServices";
export declare class UserResponseResolver {
    userResponseServices: UserResponseServices;
    constructor();
    userReponses(): Promise<any[]>;
    userResponseByUser(code: number): Promise<any[]>;
    createUserResponse(newUserResponseInput: NewUserResponseInput): Promise<number>;
    udateUserResponse(id: number, idAlternative: number): Promise<number>;
    deleteUserResponse(code: number): Promise<boolean>;
}
