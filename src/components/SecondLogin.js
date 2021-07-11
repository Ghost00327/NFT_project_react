import React, { Component } from 'react';

class SecondLogin extends Component {
  render() {
    return (
      <div className="darkbackcolor flex flex-col items-center justify-center px-4 pb-52 pt-8 sm:px-6 lg:px-8">
        <div className="pb-3">
          <p className="nortextcolor py-2">METAMASK ADRESS</p>
          <input placeholder="Placeholder" className="loginput rounded-md w-72 h-8 border-3 p-4 text-white"></input>
        </div>
        <div className="pb-1">
          <p className="nortextcolor pb-2">METAMASK PRIVATE KEY</p>
          <input placeholder="Placeholder" className="loginput rounded-md w-72 h-8 border-3 p-4 text-white"></input>
        </div>
        <p className="nortextcolor text-xs pb-3">Make sure the address and private key matches'</p>
        <div className="py-4">
          <a href="/home" className="buttonbackcolor rounded-md py-3 px-8 text-white" >Login</a>
        </div>
    </div>
    );
  }
}

export default SecondLogin;
