import { AuthChecker, ResolverData } from "type-graphql";
import { Credentials } from "../models/Login";

export const customAuthChecker:AuthChecker<Credentials> = (
    { root, args, context, info }: ResolverData<Credentials>,
    roles: string[],
  ) => {
  
    
  return true;
}
