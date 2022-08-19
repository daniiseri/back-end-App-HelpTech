import { Field, ID, Int, ObjectType } from "type-graphql";

@ObjectType()
export class Type{
  @Field(type => ID)
  id: number;

  @Field()
  description: string;
}

@ObjectType()
export class Hardware{
  @Field(type => ID)
  id: number;

  @Field()
  model: string;

  @Field()
  capacity: number;

  @Field()
  price: number;

  @Field()
  type: Type;
}