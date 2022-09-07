import { NewHardwareInput } from '../../input/NewHardwareInput';
import { NewTypeInput } from '../../input/NewTypeInput';
import { Hardware, Type } from '../../models/Hardware';
import { connectToMySql } from '../index';

export class HardwareRepositories{
  async findTypes(){
    const conn = await connectToMySql();
    const query = 'SELECT * FROM type';
    const type = await conn.execute(query);
    return type;
  }

  async findTypeById(code: number){
    const conn = await connectToMySql();
    const query = 'SELECT * FROM type WHERE id=?';
    const type = await conn.execute(query, [code]);
    return type[0];
  }

  async findHardwares(){
    const conn = await connectToMySql();
    const query = 'SELECT * FROM hardware';
    const hardwares = await conn.execute(query);
    return hardwares;
  }
  async findHardwareById(code:number){
    const conn = await connectToMySql();
    const query = 'SELECT * FROM hardware WHERE id=?';
    const hardwares = await conn.execute(query, [code]);
    return hardwares[0];
  }

  async createHardware(data: NewHardwareInput){
    const conn = await connectToMySql();
    const query = 'INSERT INTO hardware (model, capacity, price, idType) VALUES (?,?,?,?)';
    const create = await conn.execute(query, [data.model, data.capacity, data.price, data.idType]);
    const hardware = await this.findHardwareById(create[0].insertId);
    return hardware;
  }

  async updateHardware({type, ...rest}: Hardware){
    const conn = await connectToMySql();
    const query = 'UPDATE hardware SET model=?, capacity=?, price=?, idType=? WHERE id=?';
    await conn.execute(query, [rest.model, rest.capacity, rest.price, type.id, rest.id]);
    const hardware = await this.findHardwareById(rest.id);
    return hardware;
  }

  async createType(data:NewTypeInput){
    const conn = await connectToMySql();
    const query = 'INSERT INTO type (description) VALUES (?)';
    const create = await conn.execute(query, [data.description]);
    const type = await this.findTypeById(create[0].insertId);
    return type;
  }

  async updateType(data: Type){
    const conn = await connectToMySql();
    const query = 'UPDATE type SET description=? WHERE id=?';
    await conn.execute(query, [data.description, data.id]);
    const type = await this.findTypeById(data.id);
    return type;
  }
}