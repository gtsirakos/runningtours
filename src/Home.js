import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import image1 from "./image1.jpg";
import image2 from "./image2.jpg";
import runningrouteslogo from "./runningrouteslogo.png";
import MediaQueries from "react-responsive";
import { Link, } from 'react-router-dom';
import { browserHistory } from 'react-router';
import AddRoute from './AddRoute';


class Home extends Component {
    constructor(){
        super();

        this.HomeButton = this.HomeButton.bind(this);
    }
    HomeButton(){
       browserHistory.push("/addroute")
    }
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
       <div onClick={() => this.HomeButton()} className="navbarboxes">
           Add A Route
        {/* <Link to={"/addroute"}> Add a Route </Link> */}
        </div>  
      </header>
      <body>
        <div>
          <div>
            <div className="imagetext whitetext">
              Find your best Running Route in your area!!
              <form className="pure-form">
            <fieldset>
                {/* <legend>Contact Details</legend> */}

                {/* <input type="text" placeholder="Your Name"/> */}
                <input type="text" placeholder="KeyWords"/>
                <button type="submit" class="pure-button pure-button-primary">Search</button>
            </fieldset>

        </form>
              </div>
          <img src={image1} className="images"/>
          
          </div>
          <div className="title">
            <div className="homeboxes">
                <h2 className="bluetext">Supported Countries</h2>
            </div>
            <div className="homeboxes">
                <h2 className="bluetext">What we do</h2>
            </div>
            <div className="homeboxes">
                <h2 className="bluetext">Our Goal</h2>
            </div>

          </div>
          <div>
          <img src={image2} className="images"/>
          </div>

      </div>
        
      </body>
    </div>
        )
    }
}

export default Home;
