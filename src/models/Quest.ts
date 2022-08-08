import { Field, ID, Int, ObjectType } from "type-graphql";
import { QuestRepositories } from "../database/repositories/QuestRepositories";

@ObjectType()
export class Quest{
  @Field(type => ID)
  id: number;

  @Field(type => String)
  description: string;

  @Field(type => Int)
  idCategory: number;
}