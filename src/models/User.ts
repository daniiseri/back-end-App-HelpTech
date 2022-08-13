import { Length } from "class-validator";
import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class Use{
  @Field(type => ID)
  id: number;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  @Length(6, 20)
  password: string;
}