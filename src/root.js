import React from "react";
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";
import Currency from "./components/currencyRow/CurrencyRow";
import Users from "./pages/Users";
import Navibar from "./components/navibar";
import Footer from "./components/footer";

const Root = () => {
  return(
  <div>
    <Router>
      <Navibar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/users' component={Users}/>
        <Route exact path='/currency' component={Currency}/>

      </Switch>
    </Router>
    <Footer/>
  </div>
  );
};

export default Root;
