import jwt from 'jsonwebtoken';
import { config } from '../config/auth.js'

export const generateToken = (params:{}) => {
  return (jwt.sign(params , config.secret, {
    expiresIn: 86400
  }));
}

export const verifyToken = (token: string) => {
  return jwt.verify(token, config.secret);
}