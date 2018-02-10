import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Login} from './Login.js';
import  {Signup} from './Signup.js';


class Parent extends React.Component{
      constructor(props){
        super(props);
        this.state={
          login:true,
          signup:false};
            this.switch= this.switch.bind(this);
      }


      switch(word){
        var signup,login;
        if(word == "signup"){
          signup =true;login=false;
        }else{
          login = true;signup=false;
        }
        return this.setState({login:login, signup:signup});
    }
      render() {
         var self=this;
        return (
          <div>
            <div id="buttons">
            <p id="signupButton" onClick={self.switch.bind(null,"signup")} className={self.state.signup ? "yellow" : "blue"}>Sign Up</p>
            <p id="loginButton" onClick={self.switch.bind(null,"login")} className={self.state.login ? "yellow": "blue"}>Login </p>

          </div>
          {self.state.signup?<Signup/> : null}
          {self.state.login? <Login /> : null}
          </div>
      );
    }
}

ReactDOM.render(<Parent />, document.getElementById('root'));
