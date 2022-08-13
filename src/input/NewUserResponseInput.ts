import { Field, InputType, Int } from "type-graphql";

@InputType()
export class NewUserResponseInput{
  @Field(type => Int)
  idAlternative: number;

  @Field(type => Int)
  idUser: number;
}