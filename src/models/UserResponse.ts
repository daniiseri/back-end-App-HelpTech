import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class Response{
  @Field(type => ID)
  id: number;

  @Field()
  idALternative: number;

  @Field()
  idUser: number;
}