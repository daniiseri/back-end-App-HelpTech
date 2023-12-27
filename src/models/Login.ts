import { Field, ObjectType } from "type-graphql";
import { User } from "./User.js";

@ObjectType()
export class Credentials{
  @Field()
  user: User;

  @Field()
  token: string;

  @Field(type => [String], {nullable: true})
  roles?: string[];
}