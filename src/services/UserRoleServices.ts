import { UserRoleRepositories } from '../database/repositories/UserRoleRepositories';

export class UserRoleServices{
  userRoleRepositories: UserRoleRepositories;

  constructor(){
    this.userRoleRepositories = new UserRoleRepositories();
  }

  async getByUser(code: number){
    return this.userRoleRepositories.findByUser(code);
  }
}