import { UserResponseRepositories } from "../database/repositories/UserResponseRepositories";

export class UserResponseServices{
  userResponseRepositories: UserResponseRepositories;

  constructor(){
    this.userResponseRepositories = new UserResponseRepositories();
  }

  async getAll(){
    return this.userResponseRepositories.findAll();
  }

  async create(newUserResponseInput: any){
    return this.userResponseRepositories.create(newUserResponseInput);
  } 
}