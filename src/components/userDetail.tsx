import React, { useState, useEffect, ChangeEvent } from "react";
import { useParams } from "react-router-dom";
import { IUser } from "./userInterface";
import "./stylesApp.css";
import { InputUSer, DetailProps } from "./types";

export const UserDetail: React.FC<DetailProps> = ({ users, updateUser }) => {
  const { id, name, tech } = useParams();

  //   useEffect(() => {
  //     const myUser = users.find(user => user.id === id);
  //     console.log("MY USER DETAIL: ", myUser);
  //   }, []);

  console.log("UPDATE USER: ", id, name, tech);

  //   const [user, setUser] = useState<InputUSer | undefined>({
  //     name: myUser.name,
  //     tech: myUser.tech
  //   });

  //   const onChange = (e: ChangeEvent<HTMLInputElement>) => {
  //     setUser({ ...user, [e.target.name]: e.target.value });
  //   };

  //   const updateMyUser = () => {
  //     let newUser: IUser = {
  //       id,
  //       name,
  //       tech
  //     };
  //     updateUser(newUser);
  //   };

  return (
    <div>
      {id}
      {/* <form>
        <input type="text" name="name" value={user.name} onChange={onChange} />
        <input type="text" name="tech" value={user.tech} onChange={onChange} />
        <button type="button" onClick={() => updateMyUser()}>
          Add User
        </button>
      </form> */}
    </div>
  );
};
