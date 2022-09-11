import { NewHardwareInput } from '../../input/NewHardwareInput';
import { NewTypeInput } from '../../input/NewTypeInput';
import { Hardware, Type } from '../../models/Hardware';
import { connectToMySql } from '../index';

export class HardwareRepositories{
  async findHardwares(){
    const conn = await connectToMySql();
    const query = 'SELECT * FROM hardware';
    const [hardwares] = await conn.execute(query);
    return hardwares;
  }
  async findHardwareById(code:number){
    const conn = await connectToMySql();
    const query = 'SELECT * FROM hardware WHERE id=?';
    const [hardwares] = await conn.execute(query, [code]);
    return hardwares;
  }

  async createHardware(data: NewHardwareInput){
    const conn = await connectToMySql();
    const query = 'INSERT INTO hardware (model, capacity, price, idType) VALUES (?,?,?,?)';
    const [result] = await conn.execute(query, [data.model, data.capacity, data.price, data.idType]);
    return result;
  }

  async updateHardware({idType, ...rest}: Hardware){
    const conn = await connectToMySql();
    const query = 'UPDATE hardware SET model=?, capacity=?, price=?, idType=? WHERE id=?';
    const [result] = await conn.execute(query, [rest.model, rest.capacity, rest.price, idType, rest.id]);
    return result;
  }

  async deleteHardware(code:number){
    const conn = await connectToMySql();
    const query = 'DELETE FROM hardware WHERE id=?';
    const [result] = await conn.execute(query, [code]);
    return result;
  }

  async findTypes(){
    const conn = await connectToMySql();
    const query = 'SELECT * FROM type';
    const [type] = await conn.execute(query);
    return type;
  }

  async findTypeById(code: number){
    const conn = await connectToMySql();
    const query = 'SELECT * FROM type WHERE id=?';
    const [type] = await conn.execute(query, [code]);
    return type;
  }

  async createType(data:NewTypeInput){
    const conn = await connectToMySql();
    const query = 'INSERT INTO type (description) VALUES (?)';
    const [result] = await conn.execute(query, [data.description]);
    return result;
  }

  async updateType(data: Type){
    const conn = await connectToMySql();
    const query = 'UPDATE type SET description=? WHERE id=?';
    const [result] = await conn.execute(query, [data.description, data.id]);
    return result;
  }

  async deleteType(code:number){
    const conn = await connectToMySql();
    const query = 'DELETE FROM type WHERE id=?';
    const [result]= await conn.execute(query, [code]);
    return result;
  }
}