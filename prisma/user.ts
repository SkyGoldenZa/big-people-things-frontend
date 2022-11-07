import { prisma } from './prisma';
import { LoginType } from 'types/Auth';

// READ
export const getAllUsers = async () => {
  const users = await prisma.users.findMany();
  return users;
};

export const getUser = async (email: string) => {
  const user = await prisma.users.findUnique({
    where: { email },
  });
  return user;
};

export const getUserByEmail = async (email: string) => {
  const user = await prisma.users.findUnique({
    where: { email },
  });
  return user;
};

// CREATE
export const createUser = async (email: string, password: string) => {
  const user = await prisma.users.create({
    data: {
      email,
      password,
    } as LoginType,
  });
  return user;
};

// UPDATE
export const updateUser = async (id: string, updateData: {}) => {
  const user = await prisma.users.update({
    where: {
      id,
    },
    data: {
      ...updateData,
    },
  });
  return user;
};

// DELETE
export const deleteUser = async (id: string) => {
  const user = await prisma.users.delete({
    where: {
      id,
    },
  });
  return user;
};
