import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class ResultSetHeader{
  @Field()
  fieldCount: number;
  
  @Field()
  affectedRows: number;

  @Field()
  insertId: number;

  @Field()
  info: string;

  @Field()
  serverStatus: number;

  @Field()
  warningStatus: number;
}