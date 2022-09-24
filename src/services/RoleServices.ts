import { RoleRepositories } from '../database/repositories/RoleRepositories';

export class RoleServices{
  roleRepositories: RoleRepositories;

  constructor(){
    this.roleRepositories = new RoleRepositories();
  }

  async getById(code:number){
    return this.roleRepositories.findById(code);
  }
}