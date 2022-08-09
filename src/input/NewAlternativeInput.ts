import { Field, InputType, Int } from "type-graphql";
import { Max, MaxLength, Min } from 'class-validator';

@InputType()
export class NewAlternativeInput{
  @Field(type => String)
  @MaxLength(50)
  description: string;

  @Field(type => Int)
  @Min(1)
  @Max(5)
  level: number;
}