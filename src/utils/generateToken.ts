import jwt from 'jsonwebtoken';
import { config } from '../config/auth.js'
import { User } from '../models/User.js';

export type JwtPayload = {
  sub: string,
  payload: {
    user: User,
    roles: string[]
  }
}

export const generateToken = (params: JwtPayload) => {
  return (jwt.sign(params, config.secret, {
    expiresIn: 86400
  }));
}

export const verifyToken = (token: string): JwtPayload => {

  return jwt.verify(token, config.secret) as JwtPayload;
}