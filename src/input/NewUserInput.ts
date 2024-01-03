import { Field, InputType } from "type-graphql";
import { IsEmail } from 'class-validator'

@InputType()
export class NewUserInput{
  @Field()
  name: string;

  @Field()
  @IsEmail()
  email: string;

  @Field()
  password: string;
}