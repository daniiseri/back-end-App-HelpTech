import { UserRepositories } from '../database/repositories/UserRepositories';
import { NewUserInput } from '../input/NewUserInput';
import { User } from '../models/User';

export class UserServices{
  userRepositories: UserRepositories;
  constructor(){
    this.userRepositories = new UserRepositories();
  }

  async getAll(){
    return this.userRepositories.findAll();
  }

  async getById(code: number){
    return this.userRepositories.findById(code);
  }

  async create(data: NewUserInput){
    return this.userRepositories.create(data);
  }

  async update(data: User){
    return this.userRepositories.update(data);
  }

  async delete(code: number){
    return this.userRepositories.delete(code);
  }
}