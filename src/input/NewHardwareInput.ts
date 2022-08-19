import { Field, InputType } from "type-graphql";

@InputType()
export class NewHardwareInput{
  @Field()
  model:string;

  @Field()
  capacity:number;

  @Field()
  price:number;

  @Field()
  idType:number;
}