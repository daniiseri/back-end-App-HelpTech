import { Parser } from "graphql/language/parser";
import { Quest } from "../../models/Quest";
import { connectToMySql } from "../index";

export class QuestRepositories{
  quests: Quest[]=[];

  async findAll(){
    const conn = await connectToMySql();
    const query = 'SELECT * FROM quest';
    const quests = await conn.execute(query);
    return quests;
  }
}