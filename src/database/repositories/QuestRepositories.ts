import { Quest } from "../../models/Quest.js";
import connectToPostgres from "../index.js";

export class QuestRepositories {

  async findAll() {
    const conn = await connectToPostgres();
    const query = 'SELECT * FROM quest';
    const { rows } = await conn.query(query);
    return rows;
  }

  async findById(code: any) {
    const conn = await connectToPostgres();
    const query = 'SELECT * FROM quest WHERE id = $1';
    const { rows } = await conn.query(query, [code]);
    return rows[0];
  }

  async findByCategory(code: number) {
    const conn = await connectToPostgres();
    const query = 'SELECT * FROM quest WHERE idCategory = $1';
    const { rows } = await conn.query(query, [code]);
    return rows;
  }

  async create(data: any) {
    const conn = await connectToPostgres();
    const query = 'INSERT INTO quest (description, idCategory) VALUES ($1, $2)';
    const { rowCount } = await conn.query(query, [data.newQuestData.description, data.idCategory]);
    return rowCount;
  }

  async update(data: Quest) {
    const conn = await connectToPostgres();
    const query = 'UPDATE quest SET description=$1, idCategory=$2 WHERE id=$3';
    const { rowCount } = await conn.query(query, [data.description, data.idcategory, data.id]);
    return rowCount;
  }

  async delete(code: number) {
    const conn = await connectToPostgres();
    const query = 'DELETE FROM quest WHERE id=$1';
    const { rows } = await conn.query(query, [code]);
    return rows;
  }
}