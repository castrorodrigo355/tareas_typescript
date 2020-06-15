import React from "react";
import { useHistory } from "react-router-dom";
import { UserProps, InputUSer } from "./types";
import { IUser } from "./userInterface";
import "./stylesApp.css";

export const User: React.FC<UserProps> = ({ user, deleteUser }) => {
  const history = useHistory();
  const { id, name, tech } = user;

  const linkToUser = (user: IUser) => {
    const { id } = user;
    history.push(`/users/${id}/${name}/${tech}`);
  };

  return (
    <div className="user-container">
      <div className="user-container-info">
        <div>
          {id} - {name} - {tech}
        </div>
      </div>
      <div className="user-container-detail" onClick={() => linkToUser(user)}>
        Info
      </div>

      <div className="user-container-delete" onClick={() => deleteUser(user)}>
        Delete
      </div>
    </div>
  );
};
