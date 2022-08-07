import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class Category{
  @Field(type => ID)
  id: number;

  @Field(type => String)
  description: string;
}