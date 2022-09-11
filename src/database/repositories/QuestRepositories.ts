import { Quest } from "../../models/Quest";
import { connectToMySql } from "../index";

export class QuestRepositories{

  async findAll(){
    const conn = await connectToMySql();
    const query = 'SELECT * FROM quest';
    const [quests] = await conn.execute(query);
    return quests;
  }

  async findById(code: any){
    const conn = await connectToMySql();
    const query = 'SELECT * FROM quest WHERE id = ?';
    const [quest] = await conn.execute(query, [code]);
    return quest;
  }

  async create(data: any){
    const conn = await connectToMySql();
    const query = 'INSERT INTO quest (description, idCategory) VALUES (?, ?)';
    const result  = await conn.execute(query, [data.newQuestData.description, data.idCategory]);
    return result;
  }

  async update(data: Quest){
    const conn = await connectToMySql();
    const query = 'UPDATE quest SET description=?, idCategory=? WHERE id=?';
    const [result] = await conn.execute(query, [data.description, data.idCategory, data.id]);
    return result;
  }

  async delete(code: number){
    const conn = await connectToMySql();
    const query = 'DELETE FROM quest WHERE id=?';
    const [result] = await conn.execute(query, [code]);
    return result;
  }
}