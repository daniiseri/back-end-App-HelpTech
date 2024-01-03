import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { NewUserResponseInput } from "../input/NewUserResponseInput.js";
import { UserResponse } from "../models/UserResponse.js";
import { UserResponseServices } from "../services/UserResonseServices.js";
@Resolver()
export class UserResponseResolver {
  userResponseServices: UserResponseServices;

  constructor() {
    this.userResponseServices = new UserResponseServices();
  }

  @Query(() => [UserResponse])
  async userReponses() {
    const userResponses = await this.userResponseServices.getAll();
    return userResponses;
  }

  @Query(() => [UserResponse])
  async userResponseByUser(@Arg("idUser") code: number) {
    const userReponses = await this.userResponseServices.getByUser(code);
    return userReponses;
  }

  @Mutation(() => Number)
  async createUserResponse(
    @Arg("newUserResponseInput") newUserResponseInput: NewUserResponseInput
  ) {
    const userResponse = await this.userResponseServices.create(newUserResponseInput);
    return userResponse;
  }

 @Mutation(() => Number)
  async udateUserResponse(
    @Arg("id") id: number,
    @Arg("idAlternative") idAlternative: number
  ) {
    const userResponse = await this.userResponseServices.update({ id, idAlternative });
    return userResponse;
  }

  @Mutation(() => Number)
  async deleteUserResponse(
    @Arg("id") code: number
  ) {
    const result = await this.userResponseServices.delete(code);
    return result;
  }
}