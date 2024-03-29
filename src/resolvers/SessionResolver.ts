import { Arg, Mutation, Resolver } from "type-graphql";
import { SessionServices } from "../services/SessionServices.js";
import { Credentials } from '../models/Login.js';
import { generateToken } from "../utils/generateToken.js";
import { User } from "../models/User.js";
import { checkPassword } from "../utils/bcrypt.js";
import { UserRoleServices } from "../services/UserRoleServices.js";
import { RoleServices } from "../services/RoleServices.js";
import { UserRole } from "../models/UserRole.js";

@Resolver()
export class SessionResolver {
  sessionServices: SessionServices;
  userRoleServices: UserRoleServices;
  roleServices: RoleServices;

  constructor() {
    this.sessionServices = new SessionServices();
    this.userRoleServices = new UserRoleServices();
    this.roleServices = new RoleServices();
  }

  @Mutation(() => Credentials)
  async login(
    @Arg("email") email: string,
    @Arg("password") password: string
  ) {
    const [userFound] = await this.sessionServices.login(email) as User[];

    if (!userFound)
      return new Error('user not found');

    if (! await checkPassword(password, userFound.password))
      return new Error('incorrect password');

    const userRoles = await this.userRoleServices.getByUser(userFound.id) as UserRole[];

    const roles = userRoles.map(({ description }) => description)

    userFound.password = password;

    const token = generateToken({ sub: userFound.id.toString(), payload: { user: userFound, roles } });

    return { token }
  }
}