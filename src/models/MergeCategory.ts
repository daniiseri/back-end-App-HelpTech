import { Field, ID, Int, ObjectType } from "type-graphql";

@ObjectType()
export class MergeCategory{
  @Field(type => ID)
  id: number;

  @Field(type => Int)
  idCategoryOne: number;

  @Field(type => Int)
  idCategoryTwo: number;
}