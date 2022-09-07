import { Alternative } from "../../models/Alternative";
import { connectToMySql } from "../index";

export class AlternativeRepositories{
  async findAll(){
    const conn = await connectToMySql();
    const query = 'SELECT * FROM alternative';
    const alternatives = await conn.execute(query);
    return alternatives;
  }

  async findById(code: any){
    const conn = await connectToMySql();
    const query = 'SELECT * FROM alternative WHERE id = ?';
    const alternative = await conn.execute(query, [code]);
    return alternative;
  }

  async create(data: any){
    const conn = await connectToMySql();
    const query = 'INSERT INTO alternative (description, level, idCategory, idQuest) VALUES (?, ?, ?, ?)';
    const create  = await conn.execute(query, [data.newAlternativeData.description, data.newAlternativeData.level, data.idCategory, data.idQuest]);
    const alternative = await this.findById(create[0].insertId);
    return alternative[0];
  }

  async update(data: Alternative){
    const conn = await connectToMySql();
    const query = 'UPDATE alternative SET description=?, level=?, idCategory=?, idQuest=? WHERE id=?';
    await conn.execute(query, [data.description, data.level, data.idCategory, data.idQuest, data.id]);
    const alternative = await this.findById(data.id);
    return alternative[0];
  }

  async delete(code: number){
    const conn = await connectToMySql();
    const query = 'DELETE FROM alternative WHERE id=?';
    const result = await conn.execute(query, [code]);
    return result;
  }
}