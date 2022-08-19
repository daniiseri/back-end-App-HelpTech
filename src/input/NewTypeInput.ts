import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class NewTypeInput{
  @Field()
  model: string;

  @Field()
  capacity: number;

  @Field()
  price: number;

  @Field()
  idType: number;
}