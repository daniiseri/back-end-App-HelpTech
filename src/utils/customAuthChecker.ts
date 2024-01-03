import { AuthChecker, ResolverData } from "type-graphql";
import { verifyToken } from "./generateToken.js";
import { MyContext } from "../context.js";

export const customAuthChecker: AuthChecker<MyContext> = async (
  { context }: ResolverData<MyContext>,
  roles: string[],
) => {
  if (context.auth) {
    const token = context.auth?.split(' ')[1]

    if (!token) {
      return false
    }
    const { sub, payload } = verifyToken(token)

    context.userId = Number(sub)

    if (payload.roles?.some(role => roles.includes(role))) {
      return true;
    }
  }




  return false;
}
