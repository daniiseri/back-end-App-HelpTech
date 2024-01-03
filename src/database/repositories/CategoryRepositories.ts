import { Category } from "../../models/Category.js";
import connectToPostgres from "../index.js";

export class CategoryRepositories {
  async findAll() {
    const conn = await connectToPostgres();
    const query = 'SELECT * FROM category';
    const { rows } = await conn.query(query);
    return rows;
  }

  async findById(code: any) {
    const conn = await connectToPostgres();
    const query = 'SELECT * FROM category WHERE id = $1';
    const { rows } = await conn.query(query, [code]);
    return rows;
  }

  async findByDescription(description: string){
    const conn = await connectToPostgres();
    const query = 'SELECT * FROM category WHERE description = $1';
    const { rows } = await conn.query(query, [description]);
    return rows[0];
  }

  async create(data: any) {
    const conn = await connectToPostgres();
    const query = 'INSERT INTO category (description) VALUES ($1)';
    const { rowCount } = await conn.query(query, [data.description]);
    return rowCount;
  }

  async update(data: Category) {
    const conn = await connectToPostgres();
    const query = 'UPDATE category SET description=$1 WHERE id=$2';
    const { rowCount } = await conn.query(query, [data.description, data.id]);
    return rowCount;
  }

  async delete(code: number) {
    const conn = await connectToPostgres();
    const query = 'DELETE FROM category WHERE id=$1';
    const { rowCount } = await conn.query(query, [code]);
    return rowCount;
  }
}