import { Length } from "class-validator";
import { Field, ID, InputType } from "type-graphql";

@InputType()
export class NewUserInput{
  @Field(type => ID)
  name: string;

  @Field()
  @Length(6, 20)
  email: string;

  @Field()
  password: string;
}