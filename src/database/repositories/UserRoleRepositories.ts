import connectToPostgres from '../index.js';

export class UserRoleRepositories{
  async findByUser(code:number){
    const conn = await connectToPostgres();
    const query = 'SELECT * FROM userRole INNER JOIN role ON userRole.idRole = role.id WHERE idUser=$1';
    const {rows} = await conn.query(query, [code]);
    return rows;
  }

  async delete(idUserRole: number){
    const conn = await connectToPostgres();
    const query = 'DELETE FROM userRole WHERE id = $1'
    const { rowCount } = await conn.query(query, [idUserRole])
    return rowCount
  }

  async create(idUser: number, idRole?: number){
    const conn = await connectToPostgres();
    const query = `INSERT INTO  userrole(iduser, idrole) VALUES($1, $2)`
    const { rowCount } = await conn.query(query, [idUser, idRole ?? 2])
    return rowCount
  }
}