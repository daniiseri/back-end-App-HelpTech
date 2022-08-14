import { Length } from "class-validator";
import { Field, ID, InputType } from "type-graphql";

@InputType()
export class NewUserInput{
  @Field(type => ID)
  name: string;

  @Field()
  email: string;

  @Field()
  password: string;
}