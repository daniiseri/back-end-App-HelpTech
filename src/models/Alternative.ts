import { Max, Min } from "class-validator";
import { Field, ID, Int, ObjectType } from "type-graphql";

@ObjectType()
export class Alternative{
  @Field(type => ID)
  id: number;

  @Field(type => String)
  description: string;

  @Field(type => Int)
  @Min(1)
  @Max(5)
  level: number;

  @Field(type => Int, {nullable: true})
  idCategory: number;

  @Field(type => Int, {nullable: true})
  idQuest: number;
}