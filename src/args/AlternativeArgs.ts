import { ArgsType, Field, Int } from "type-graphql";

@ArgsType()
export class AlternativeArgs{
  @Field(type => String)
  description: string;

  @Field(type => Int)
  level: number;

  @Field(type => Int)
  idCategory: number;

  @Field(type => Int)
  idQuest: number;
}