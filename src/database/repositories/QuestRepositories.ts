import { connectToMySql } from "../index";

export class QuestRepositories{

  async findAll(){
    const conn = await connectToMySql();
    const query = 'SELECT * FROM quest';
    const quests = await conn.execute(query);
    return quests;
  }

  async findById(code: any){
    const conn = await connectToMySql();
    const query = 'SELECT * FROM quest WHERE id = ?';
    const quests = await conn.execute(query, [code]);
    return quests;
  }

  async create(data: any){
    const conn = await connectToMySql();
    const query = 'INSERT INTO quest (description, idCategory) VALUES (?, ?)';
    const create  = await conn.execute(query, [data.newQuestData.description, data.idCategory]);
    const quest = await this.findById(create[0].insertId);
    return quest[0];
  }
}