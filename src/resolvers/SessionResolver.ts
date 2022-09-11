import { Arg, Mutation, Resolver } from "type-graphql";
import { SessionServices } from "../services/SessionServices";
import { Credentials } from '../models/Login';
import { checkPassword } from "../utils/bcrypt";
import { generateToken } from "../utils/generateToken";

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
    const userFound = await this.sessionServices.login(email);

    if(!userFound){
      return 'user not found';
    }

    if(!checkPassword(password, userFound.password)){
      return 'user not found';
    }

    const token = generateToken({id:userFound.id})
    userFound.password = undefined;

    return {user:userFound, token}
  }
}