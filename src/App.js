import React from "react";
import "./App.css";
import Signup from "./components/signup";
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import { AuthProvider } from "./context/AuthProvider";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import ForgotPasssword from './components/ForgotPassword'
function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path="/" component={Dashboard}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/login" component={Login}/>
        <Route path="/forgot-password" component={ForgotPasssword}/>
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
