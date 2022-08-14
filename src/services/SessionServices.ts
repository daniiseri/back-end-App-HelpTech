import { checkPassword } from '../utils/bcrypt';
import { UserRepositories } from '../database/repositories/UserRepositories';
import jwt from 'jsonwebtoken';

const authConfig = require('../config/auth');
 
export class SessionServices{
  userRepositories: UserRepositories;

  constructor(){
    this.userRepositories = new UserRepositories();
  }

  async login(email: string, password: string){
    const userFound = await this.userRepositories.findUser(email);

    if(!userFound[0])
    return { result:'Sucess',  message: {error: 'Usuário não encontrado!'}};

    if(! await checkPassword(password, userFound[0].password))
    return { result:'Sucess',  message: {error: 'Senha inválida!'}};

    userFound[0].password = undefined;

    const token = jwt.sign({ id: userFound[0].id }, authConfig.secret, {
      expiresIn: 86400
    });

    return { result:'Sucess' , message: {user: userFound[0], token: token} };
  }
}