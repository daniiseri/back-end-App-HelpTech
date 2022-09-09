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
    return userResponses[0];
  }

  @Authorized()
  @Query(()=>[UserResponse])
  async userResponseByUser(@Arg("idUser") code:number){
    const userReponses = await this.userResponseServices.getByUser(code);
    return userReponses[0];
  }

  @Mutation(() => [UserResponse])
  async createUserResponse(
    @Arg("newUserResponseInput") newUserResponseInput: NewUserResponseInput
  ){
    const userResponse = await this.userResponseServices.create(newUserResponseInput);
    return userResponse;
  }

  @Mutation(() => [UserResponse])
  async udateUserResponse(
    @Arg("id") id: number,
    @Arg("idAlternative") idAlternative: number
  ){
    const userResponse = await this.userResponseServices.update({id, idAlternative});
    return userResponse;
  }
}