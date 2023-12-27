import bcryptjs from 'bcryptjs';

const { hash, compare } = bcryptjs

export async function encryptPassword(password: string) {
  return hash(password, 10);
}

export async function checkPassword(password: string, currentPassword: string) {
  return compare(password, currentPassword);
}