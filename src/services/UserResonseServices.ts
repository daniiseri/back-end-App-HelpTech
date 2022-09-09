import { UserResponseRepositories } from "../database/repositories/UserResponseRepositories";
import { NewUserResponseInput } from "../input/NewUserResponseInput";
import { UserResponse } from "../models/UserResponse";

export class UserResponseServices{
  userResponseRepositories: UserResponseRepositories;

  constructor(){
    this.userResponseRepositories = new UserResponseRepositories();
  }

  async getAll(){
    return this.userResponseRepositories.findAll();
  }

  async getByUser(code:number){
    return this.userResponseRepositories.findByUser(code);
  }

  async create(newUserResponseInput: NewUserResponseInput){
    return this.userResponseRepositories.create(newUserResponseInput);
  } 

  async update(data:any){
    return this.userResponseRepositories.update(data);
  } 
}