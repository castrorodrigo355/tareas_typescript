import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { About } from "./components/about";
import { Navbar } from "./components/navbar";
import { Users } from "./components/users";
import { Home } from "./components/home";
import { Form } from "./components/form";
import { usersList, randomInt } from "./components/constants";
import { IUser } from "./components/userInterface";
import { UserDetail } from "./components/userDetail";
import { DeleteUser, InputUSer, AddUser } from "./components/types";

export const App: React.FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setUsers(usersList);
      setLoading(false);
    }, 3000);
  }, []);

  const deleteUser: DeleteUser = user =>
    setUsers(users.filter(u => u.id != user.id));

  const addUser: AddUser = newUser => setUsers([...users, newUser]);

  const updateUser: AddUser = newUser => {};

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/users/:id/:name/:tech">
          <UserDetail users={users} updateUser={updateUser} />
        </Route>
        <Route path="/users">
          <Users users={users} loading={loading} deleteUser={deleteUser} />
        </Route>
        <Route path="/form">
          <Form addUser={addUser} />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};
