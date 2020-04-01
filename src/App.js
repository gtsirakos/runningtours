import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import image1 from "./image1.jpg";
import image2 from "./image2.jpg";
import runningrouteslogo from "./runningrouteslogo.png";
import MediaQueries from "react-responsive";
import Home from "./Home.js"
import AddRoute from './AddRoute';
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";

class App extends Component {
  render(){
    return(
      <BrowserRouter>
      <Switch>
        <Route path= "/addroute" component={AddRoute}/>
        <Route exact path="/" exact component={Home}/>
    <Route exact path="/*" render={() => <div>Error 404</div>}/>
      </Switch>
      </BrowserRouter>
    );
  }
}
export default App;