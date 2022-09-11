import { Arg, Query, Resolver, Mutation } from 'type-graphql';
import { UserServices } from '../services/UserServices';
import { User } from '../models/User';
import { NewUserInput } from '../input/NewUserInput';
import { ResultSetHeader } from '../models/ResultSetHeader';

@Resolver()
export class UserResolver{
  userServices: UserServices;

  constructor(){
    this.userServices = new UserServices();
  }

  @Query(() => [User])
  async users(){
    const users = await this.userServices.getAll();
    return users;
  }

  @Mutation(() => ResultSetHeader)
  async createUser(
    @Arg("newUserInput") newUserInput: NewUserInput
  ){
    const user = await this.userServices.create(newUserInput);
    return user;
  }

  @Mutation(() => ResultSetHeader)
  async updateUser(
    @Arg("id") id: number,
    @Arg("name") name: string,
    @Arg("email") email: string,
    @Arg("password") password: string
  ){
    const user = await this.userServices.update({id, name, email, password});
    return user;
  }

  @Mutation(() => Boolean)
  async deleteUser(
    @Arg("id") code: number
  ){
    const result = await this.userServices.delete(code);
    return result ? true : false;
  }
}