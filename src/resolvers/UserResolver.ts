import { Arg, Query, Resolver, Mutation, Authorized, Ctx, UseMiddleware } from 'type-graphql';
import { UserServices } from '../services/UserServices.js';
import { UserRoleServices } from '../services/UserRoleServices.js';
import { User } from '../models/User.js';
import { NewUserInput } from '../input/NewUserInput.js';
import { MyContext } from '../context.js';

@Resolver()
export class UserResolver {
  userServices: UserServices;
  userRolesServices: UserRoleServices;

  constructor() {
    this.userServices = new UserServices();
  }

  @Authorized("Admin")
  @Query(() => [User])
  async users() {
    const users = await this.userServices.getAll();

    if (!users.length)
      return new Error('users not found');

    return users;
  }

  @Mutation(() => Number)
  async createUser(@Arg("newUserInput") { name, email, password }: NewUserInput) {
    const user = await this.userServices.create({ name, email, password });

    return user;
  }

  @Authorized("Admin", "user")
  @Query(() => User)
  async userById(@Ctx() context: MyContext ){
    const userId = context.userId

    const user = await this.userServices.getById(userId)

    return user
  }

  @Authorized("Admin", "user")
  @Mutation(() => Number)
  async updateUser(
    @Arg("id") id: number,
    @Arg("name") name: string,
    @Arg("email") email: string,
    @Arg("password") password: string
  ) {
    const user = await this.userServices.update({ id, name, email, password });

    return user;
  }

  @Authorized("Admin", "user")
  @Mutation(() => Number)
  async deleteUser(
    @Arg("id") code: number
  ) {
    const result = await this.userServices.delete(code);
    return result;
  }
}