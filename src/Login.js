import React from 'react';

export class Login extends React.Component{
  render() {
    return(
      <div>
      <div id="login">
      <input type="email" id="email" placeholder="Email" />
      <input type="password" id="password" placeholder="Password" />
      <button id="send">Log In</button>
      </div>
      </div>
    );
   }
}
