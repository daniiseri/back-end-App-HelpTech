import { Field, InputType } from "type-graphql";

@InputType()
export class NewTypeInput{
  @Field()
  description:string;
}