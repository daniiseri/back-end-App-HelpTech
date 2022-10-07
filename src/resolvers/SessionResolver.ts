import { Arg, Mutation, Resolver } from "type-graphql";
import { SessionServices } from "../services/SessionServices";
import { Credentials } from '../models/Login';
import { generateToken } from "../utils/generateToken";
import { User } from "../models/User";
import { checkPassword } from "../utils/bcrypt";
import { UserRoleServices } from "../services/UserRoleServices";
import { RoleServices } from "../services/RoleServices";
import { Role } from "../models/Role";
import { UserRole } from "../models/UserRole";

@Resolver()
export class SessionResolver{
  sessionServices: SessionServices;
  userRoleServices: UserRoleServices;
  roleServices: RoleServices;

  constructor(){
    this.sessionServices = new SessionServices();
    this.userRoleServices = new UserRoleServices();
    this.roleServices = new RoleServices();
  }

  @Mutation(() => Credentials)
  async login(
    @Arg("email") email: string,
    @Arg("password") password: string
  ){
    const [userFound] = await this.sessionServices.login(email) as User[];

    if(!userFound)
      return new Error('user not found');

    if(! await checkPassword(password, userFound.password))
      return new Error('incorrect password');

    const userRoles = await this.userRoleServices.getByUser(userFound.id) as UserRole[];

    const promiseRoles = await userRoles.map(async ({roleid}) => {
      const [{description}] = await this.roleServices.getById(roleid) as Role[];
      return description;
    });

    userFound.password = password;

    const roles = await Promise.all(promiseRoles);

    const token = generateToken({id:userFound.id});
    
    return {user:userFound, roles, token}
  }
}