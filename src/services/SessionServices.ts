import { checkPassword } from '../utils/bcrypt';
import { UserRepositories } from '../database/repositories/UserRepositories';
import { generateToken } from '../utils/generateToken';

const authConfig = require('../config/auth');
 
export class SessionServices{
  userRepositories: UserRepositories;

  constructor(){
    this.userRepositories = new UserRepositories();
  }

  async login(email: string, password: string){
    const userFound = await this.userRepositories.findUser(email);

    const [user] = Object.values(userFound);

    if(!user)
    return { result:'Sucess',  message: {error: 'Usuário não encontrado!'}};

    if(! await checkPassword(password, user.password))
    return { result:'Sucess',  message: {error: 'Senha inválida!'}};

    user.password = undefined;

    return { result:'Sucess' , message: {user, token: generateToken({id: user.id})} };
  }
}