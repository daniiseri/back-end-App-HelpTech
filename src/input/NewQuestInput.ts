import { Field, InputType, Int } from "type-graphql";
import { MaxLength } from 'class-validator';

@InputType()
export class NewQuestInput{
  @Field(type => String)
  @MaxLength(50)
  description: string;
}