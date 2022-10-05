import { Arg, Authorized, Mutation, Query, Resolver } from "type-graphql";
import { NewUserResponseInput } from "../input/NewUserResponseInput";
import { UserResponse } from "../models/UserResponse";
import { UserResponseServices } from "../services/UserResonseServices";

@Resolver()
export class UserResponseResolver{
  userResponseServices: UserResponseServices;

  constructor(){
    this.userResponseServices = new UserResponseServices();
  }

  @Authorized()
  @Query(() => [UserResponse])
  async userReponses(){
    const userResponses = await this.userResponseServices.getAll();
    return userResponses;
  }

  @Authorized()
  @Query(()=>[UserResponse])
  async userResponseByUser(@Arg("idUser") code:number){
    const userReponses = await this.userResponseServices.getByUser(code);
    return userReponses;
  }

  @Authorized()
  @Mutation(() => Number)
  async createUserResponse(
    @Arg("newUserResponseInput") newUserResponseInput: NewUserResponseInput
  ){
    const userResponse = await this.userResponseServices.create(newUserResponseInput);
    return userResponse;
  }

  @Authorized()
  @Mutation(() => Number)
  async udateUserResponse(
    @Arg("id") id: number,
    @Arg("idAlternative") idAlternative: number
  ){
    const userResponse = await this.userResponseServices.update({id, idAlternative});
    return userResponse;
  }

  @Authorized()
  @Mutation(() => Boolean)
  async deleteUserResponse(
    @Arg("id") code: number
  ){
    const result = await this.userResponseServices.delete(code);
    return result ? true : false;
  }
}