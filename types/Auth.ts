export type LoginType = {
  email: string;
  password: string;
}

export type User = {
  id: string;
  email: string;
  firstname?: string;
  lastname?: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
};
