import { UserRepositories } from '../database/repositories/UserRepositories';
 
export class SessionServices{
  userRepositories: UserRepositories;

  constructor(){
    this.userRepositories = new UserRepositories();
  }

  async login(email: string){
    return this.userRepositories.findUser(email);
  }
}