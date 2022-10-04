import jwt from 'jsonwebtoken';
export declare const generateToken: (params: {}) => string;
export declare const verifyToken: (token: string) => string | jwt.JwtPayload;
