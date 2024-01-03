import { Alternative } from "../../models/Alternative.js";
import connectToPostgres from "../index.js";

export class AlternativeRepositories{
  async findAll(){
    const conn = await connectToPostgres();
    const query = 'SELECT * FROM alternative';
    const {rows} = await conn.query(query);
    return rows;
  }

  async findById(code: any){
    const conn = await connectToPostgres();
    const query = 'SELECT * FROM alternative WHERE id = $1';
    const {rows} = await conn.query(query, [code]);
    return rows;
  }

  async findByQuest(code: number){
    const conn = await connectToPostgres();
    const query = 'SELECT * FROM alternative WHERE idquest = $1';
    const {rows} = await conn.query(query, [code]);
    return rows;
  }

  async create(data: any){
    const conn = await connectToPostgres();
    const query = 'INSERT INTO alternative (description, level, idCategory, idQuest) VALUES ($1, $2, $3, $4)';
    const {rowCount}  = await conn.query(query, [data.newAlternativeData.description, data.newAlternativeData.level, data.idCategory, data.idQuest]);
    return rowCount;
  }

  async update(data: Alternative){
    const conn = await connectToPostgres();
    const query = 'UPDATE alternative SET description=$1, level=$2, idCategory=$3, idQuest=$4 WHERE id=$5';
    const {rowCount} = await conn.query(query, [data.description, data.level, data.idcategory, data.idquest, data.id]);
    return rowCount;
  }

  async delete(code: number){
    const conn = await connectToPostgres();
    const query = 'DELETE FROM alternative WHERE id=$1';
    const {rowCount} = await conn.query(query, [code]);
    return rowCount;
  }
}