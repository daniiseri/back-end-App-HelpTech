import { ArgsType, Field, Int } from "type-graphql";

@ArgsType()
export class QuestArgs{
  @Field(type => String)
  description: string;

  @Field(type => Int)
  idCategory: number;
}