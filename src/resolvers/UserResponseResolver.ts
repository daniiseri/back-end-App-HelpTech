import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { NewUserResponseInput } from "../input/NewUserResponseInput";
import { UserResponse } from "../models/UserResponse";
import { UserResponseServices } from "../services/UserResonseServices";

@Resolver()
export class UserResponseResolver{
  userResponseServices: UserResponseServices;

  constructor(){
    this.userResponseServices = new UserResponseServices();
  }

  @Query(() => [UserResponse])
  async userReponses(){
    const userResponses = await this.userResponseServices.getAll();
    return userResponses[0];
  }

  @Mutation(() => [UserResponse])
  async createUserResponse(
    @Arg("newUserResolverInput") newUserResponseInput: NewUserResponseInput
  ){
    const userResponse = await this.userResponseServices.create(newUserResponseInput);
    return userResponse;
  }
}