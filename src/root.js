import React from "react";
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";
import Currency from "./pages/Currency";
import Users from "./pages/Users";
import Navibar from "./components/navibar";
import Footer from "./components/footer";
import Follower from "./components/СlientBase/App";
import './components/СlientBase/Index.css';
import './pages/styles.css';
import './components/slider/style.css';

const Root = () => {
  return(
  <div>
    <Router>
      <Navibar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/users' component={Users}/>
        <Route exact path='/currency' component={Currency}/>
        <Route exact path='/follower' component={Follower}/>
      </Switch>
    </Router>
    <Footer/>
  </div>
  );
};

export default Root;
