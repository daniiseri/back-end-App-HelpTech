import { connectToMySql } from "../index";

export class QuestRepositories{
  async findAll(){
    const conn = await connectToMySql();
    const query = 'SELECT * FROM quest';
    const quests = await conn.execute(query);
    return quests;
  }
}