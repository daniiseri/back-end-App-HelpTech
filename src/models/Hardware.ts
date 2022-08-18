import { Field, ID, ObjectType } from "type-graphql";

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
  price: number;

  @Field()
  type: Type;
}