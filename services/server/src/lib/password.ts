import bcrypt from 'bcrypt';

const SALT_OR_ROUNDS = 10;

export const encryptPassword = async (password: string) =>
  await bcrypt.hash(password, SALT_OR_ROUNDS);

export const matchPassword = async (password: string, encryptedPassword: string) =>
  await bcrypt.compare(password, encryptedPassword);
