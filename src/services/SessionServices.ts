import { UserRepositories } from '../database/repositories/UserRepositories.js';
 
export class SessionServices{
  userRepositories: UserRepositories;

  constructor(){
    this.userRepositories = new UserRepositories();
  }

  async login(email: string){
    return this.userRepositories.findUser(email);
  }
}