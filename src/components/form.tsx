import React, { useState, ChangeEvent, FormEvent } from "react";
import { InputUSer, FormProps } from "./types";
import { randomInt } from "./constants";

export const Form: React.FC<FormProps> = ({ addUser }) => {
  const [user, setUser] = useState<InputUSer>({ name: "", tech: "" });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const insertUser = () => {
    let newUser = {
      id: randomInt(1000, 100000),
      name: user.name,
      tech: user.tech
    };
    addUser(newUser);
  };

  return (
    <div>
      <form>
        <input type="text" name="name" value={user.name} onChange={onChange} />
        <input type="text" name="tech" value={user.tech} onChange={onChange} />
        <button type="button" onClick={() => insertUser()}>
          Add User
        </button>
      </form>
    </div>
  );
};
