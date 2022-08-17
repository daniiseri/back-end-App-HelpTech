import { Field, InterfaceType, ObjectType } from "type-graphql";
import { User } from "./User";

@ObjectType()
export class Message{
  @Field({nullable: true})
  user: User;

  @Field({nullable: true})
  token: string;

  @Field({nullable: true})
  error: string;
}

@ObjectType()
export class Login{
  @Field()
  result: string;

  @Field()
  message: Message;
}