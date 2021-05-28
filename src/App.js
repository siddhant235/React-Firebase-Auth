import React from "react";
import "./App.css";
import Signup from "./components/signup";
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import { AuthProvider } from "./context/AuthProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route exact path="/" component={Dashboard}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/login" component={Login}/>
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
