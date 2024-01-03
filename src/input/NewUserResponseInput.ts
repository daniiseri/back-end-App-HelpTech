import { Field, InputType } from "type-graphql";
import { IsInt } from 'class-validator'

@InputType()
export class NewUserResponseInput{
  @Field()
  @IsInt()
  idalternative: number;

  @Field()
  @IsInt()
  iduser: number;
}