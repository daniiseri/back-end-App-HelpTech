import { AuthChecker, ResolverData } from "type-graphql";
import { Credentials } from "../models/Login";

export const customAuthChecker:AuthChecker<Credentials> = (
    { context: {user, roles: userRole} }: ResolverData<Credentials>,
    roles: string[],
  ) => {

    if(!user){
      return false;
    }

    if(userRole?.some(role => roles.includes(role))){
      return true;
    }
  
  return false;
}
