import React from "react";
import { User } from "./user";
import { UsersProps } from "./types";
import "./stylesApp.css";

export const Users: React.FC<UsersProps> = ({ users, loading, deleteUser }) => {
  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="users-container">
      {users.map(user => (
        <User key={user.id} user={user} deleteUser={deleteUser} />
      ))}
    </div>
  );
};
