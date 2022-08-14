import { Arg, Mutation, Resolver } from "type-graphql";
import { SessionServices } from "../services/SessionServices";
import { Login } from '../models/Login';
import { User } from "../models/User";


@Resolver()
export class SessionResolver{
  sessionServices: SessionServices;

  constructor(){
    this.sessionServices = new SessionServices();
  }

  @Mutation(() => Login)
  async login(
    @Arg("email") email: string,
    @Arg("password") password: string
  ){
    const result = await this.sessionServices.login(email, password);
    return result
  }
}