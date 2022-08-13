import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class User{
  @Field(type => ID)
  id: number;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  password: string;
}