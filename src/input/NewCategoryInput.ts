import { Field, InputType } from "type-graphql";
import { MaxLength } from 'class-validator';

@InputType()
export class NewCategoryInput{
  @Field(type => String)
  @MaxLength(50)
  description: string;
}