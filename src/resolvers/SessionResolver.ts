import { Arg, Mutation, Resolver } from "type-graphql";
import { SessionServices } from "../services/SessionServices";
import { Credentials } from '../models/Login';
import { generateToken } from "../utils/generateToken";
import { compare } from "bcryptjs";

@Resolver()
export class SessionResolver{
  sessionServices: SessionServices;

  constructor(){
    this.sessionServices = new SessionServices();
  }

  @Mutation(() => Credentials)
  async login(
    @Arg("email") email: string,
    @Arg("password") password: string
  ){
    const [userFound] = await Object.values((this.sessionServices.login(email)));

    if(!userFound)
      return;

    if(!compare(password, userFound.password))
      return;

    const token = generateToken({id:userFound.id});
    return {user:userFound, token}
  }
}