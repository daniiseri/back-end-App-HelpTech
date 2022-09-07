import { Quest } from "../../models/Quest";
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

  async update(data: Quest){
    const conn = await connectToMySql();
    const query = 'UPDATE quest SET description=?, idCategory=? WHERE id=?';
    await conn.execute(query, [data.description, data.idCategory, data.id]);
    const quest = await this.findById(data.id);
    return quest[0];
  }

  async delete(code: number){
    const conn = await connectToMySql();
    const query = 'DELETE FROM quest WHERE id=?';
    const result = await conn.execute(query, [code]);
    return result;
  }
}