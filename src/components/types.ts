import { IUser } from "./userInterface";

export type DeleteUser = (deleteUSer: IUser) => void;
export type AddUser = (addUser: IUser) => void;
export type UpdateUser = (updateUser: IUser) => void;

export type DetailProps = {
  users: Array<IUser>;
  updateUser: UpdateUser;
};

export type UserProps = {
  user: IUser;
  deleteUser: DeleteUser;
};

export type FormProps = {
  addUser: AddUser;
};

export type UsersProps = {
  users: Array<IUser>;
  loading: boolean;
  deleteUser: DeleteUser;
};

export type InputUSer = {
  name: string;
  tech: string;
};
