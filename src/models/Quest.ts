import { Field, ID, Int, ObjectType } from "type-graphql";

@ObjectType()
export class Quest{
  @Field(type => ID)
  id: number;

  @Field(type => String)
  description: string;

  @Field(type => Int)
  idCategory: number;
}