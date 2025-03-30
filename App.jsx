import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Login from "./Login.jsx";  // Make sure the path is correct
import UsersList from "./UsersList.jsx";  // Correct file path and name
import EditUser from "./EditUser.jsx";    // Correct file path and name
import Userslist from "./UsersList.jsx";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/users" component={UsersList} />
        <Route path="/edit/:id" component={EditUser} />
        <Route path="/delt/:id" component={Userslist} />
        <Redirect from="/" to="/login" />
      </Switch>
    </Router>
  );
}

export default App;
