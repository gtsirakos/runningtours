import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import image1 from "./image1.jpg";
import image2 from "./image2.jpg";
import runningrouteslogo from "./runningrouteslogo.png";
import MediaQueries from "react-responsive";


class AddRoute extends Component {
    render(){
        return(
        <div className="App">
      <header className="navbar">
       <div>
            <img src={runningrouteslogo} className="logo"/>
       </div>
       
       <div className="navbarboxes">
         Sign Up
       </div>
       <div className="navbarboxes">
         Log in
       </div>
       <div className="navbarboxes">
         Contact Us
       </div>
       <div className="navbarboxes">
         Find More
       </div>
       <div className="navbarboxes">
        Add a Route
        </div>  
      </header>
      <body>
        
        
      </body>
    </div>
        )
    }
}

export default AddRoute;
