import React from 'react';


export class Signup extends React.Component{
  render() {

    return(
      <div>
        <div id="signup">
          <input type="text" id="first" placeholder="First Name" />
          <input type="text" id="e-mail" placeholder="Email" />
          <input type="text" id="Age" placeholder="Age" />
          <input type="text" id="password" placeholder="Password" />
          <input type="text" id="confirm" placeholder="Confirm Password" />
          <button id="send">Sign In</button>
        </div>

      </div>
    );
  }
}
