import { ArgsType, Field, Int } from "type-graphql";

@ArgsType()
export class MergeCategoryArgs{
  @Field(type => Int)
  idCategoryOne: number;

  @Field(type => Int)
  idCategoryTwo: number;
}