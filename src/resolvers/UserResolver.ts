import { Arg, Query, Resolver, Mutation } from 'type-graphql';
import { UserServices } from '../services/UserServices.js';
import { User } from '../models/User.js';
import { NewUserInput } from '../input/NewUserInput.js';

@Resolver()
export class UserResolver{
  userServices: UserServices;

  constructor(){
    this.userServices = new UserServices();
  }

  @Query(() => [User])
  async users(){
    const users = await this.userServices.getAll();

    if(!users.length)
    return new Error('users not found');
    
    return users;
  }

  @Mutation(() => Number)
  async createUser(
    @Arg("newUserInput") newUserInput: NewUserInput
  ){
    const user = await this.userServices.create(newUserInput);

    if(!user)
    return new Error('fail insert')

    return user;
  }

  @Mutation(() => Number)
  async updateUser(
    @Arg("id") id: number,
    @Arg("name") name: string,
    @Arg("email") email: string,
    @Arg("password") password: string
  ){
    const user = await this.userServices.update({id, name, email, password});

    if(!user)
    return new Error('fail update')

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