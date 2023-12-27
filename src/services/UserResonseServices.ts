import { UserResponseRepositories } from "../database/repositories/UserResponseRepositories.js";
import { NewUserResponseInput } from "../input/NewUserResponseInput.js";
import { UserResponse } from "../models/UserResponse.js";

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

  async delete(code:number){
    return this.userResponseRepositories.delete(code);
  } 
}