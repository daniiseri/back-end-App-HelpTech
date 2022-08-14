import { Arg, Query, Resolver, Mutation } from 'type-graphql';
import { UserServices } from '../services/UserServices';
import { User } from '../models/User';
import { NewUserInput } from '../input/NewUserInput';

@Resolver()
export class UserResolver{
  userServices: UserServices;

  constructor(){
    this.userServices = new UserServices();
  }

  @Query(() => [User])
  async users(){
    const users = await this.userServices.getAll();
    return users[0];
  }

  @Mutation(() => [User])
  async createUser(
    @Arg("newUserInput") newUserInput: NewUserInput
  ){
    const user = await this.userServices.create(newUserInput);
    return user;
  }
}