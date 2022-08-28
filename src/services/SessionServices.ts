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
    return {error: true};

    if(! await checkPassword(password, user.password))
    return {error: true};

    user.password = undefined;

    return { user, token: generateToken({id: user.id}), error: false};
  }
}