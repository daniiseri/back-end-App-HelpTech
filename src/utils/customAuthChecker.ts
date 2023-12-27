import { AuthChecker, ResolverData } from "type-graphql";
import { Credentials } from "../models/Login.js";

export const customAuthChecker:AuthChecker<Credentials> = async (
    { context }: ResolverData<Credentials>,
    roles: string[],
  ) => {

    if(!context.token){
      return false;
    }
    
    if(context.roles?.some(role => roles.includes(role))){
      return true;
    }
  
  return false;
}
