import { Field, ObjectType } from "type-graphql";
import { User } from "./User";

@ObjectType()
export class Login{
  @Field({nullable: true})
  user: User;

  @Field({nullable: true})
  token: string;

  @Field(type => Boolean)
  error: boolean;
}