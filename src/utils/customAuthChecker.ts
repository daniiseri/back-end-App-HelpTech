import { AuthChecker, ResolverData } from "type-graphql";
import { ContextType } from "../models/Login";

export const customAuthChecker:AuthChecker<ContextType> = (
    { root, args, context, info }: ResolverData<ContextType>,
    roles: string[],
  ) => {
  
    
  return true;
}
