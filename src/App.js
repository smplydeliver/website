import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import About from "./components/about";
import RegistrationBusiness from "./components/businessRegistration";
import BusinessWithSmplydeliver from "./components/businessWithSmplydeliver";
import history from "./components/history";
import Home from "./components/home";
import Registration from "./components/registration";

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/user/register" component={Registration}/>
        <Route exact path="/business/register" component={RegistrationBusiness}/>
        <Route exact path="/business" component={BusinessWithSmplydeliver}/>
      </Switch>
    </Router>
  );
}

export default App;
