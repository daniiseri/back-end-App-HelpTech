import { UserRepositories } from '../database/repositories/UserRepositories';
import { NewUserInput } from '../input/NewUserInput';
import { User } from '../models/User';

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

  async create(data: NewUserInput){
    const newUser = await this.userRepositories.create(data);
    return newUser;
  }

  async update(data: User){
    const user = await this.userRepositories.update(data);
    return user;
  }

  async delete(code: number){
    const result = await this.userRepositories.delete(code);
    return result;
  }
}