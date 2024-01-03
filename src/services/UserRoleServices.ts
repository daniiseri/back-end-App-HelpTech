import { UserRoleRepositories } from '../database/repositories/UserRoleRepositories.js';

export class UserRoleServices{
  userRoleRepositories: UserRoleRepositories;

  constructor(){
    this.userRoleRepositories = new UserRoleRepositories();
  }

  async getByUser(code: number){
    return this.userRoleRepositories.findByUser(code);
  }

  async delete(idUserRole: number){
    return this.userRoleRepositories.delete(idUserRole)
  }

  async create(idUser: number, idRole?: number){
    return this.userRoleRepositories.create(idUser, idRole)
  }
}