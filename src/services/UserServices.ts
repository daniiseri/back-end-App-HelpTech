import { UserRepositories } from '../database/repositories/UserRepositories';

export class UserServices{
  userRepositories: UserRepositories;
  constructor(){
    this.userRepositories = new UserRepositories();
  }

  async getAll(){
    const users = await this.userRepositories.findAll();

    return users;
  }

  async getById(code: number){
    const [user] = await this.userRepositories.findById(code);
    return user;
  }

  async create(data: any){
    const newUser = await this.userRepositories.create(data);

    return newUser;
  }
}