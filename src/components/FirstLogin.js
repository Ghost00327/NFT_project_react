import React, { Component } from 'react';


class FirstLogin extends Component {
  render() {

    return (
      <div className="darkbackcolor flex flex-col items-center justify-center py-6 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="mt-6 text-center text-3xl text-white">Login</h2>
        </div>
        <div className="pt-4 pb-3 mb-4">
          <p className="nortextcolor py-2">SERIAL KEY</p>
          <input placeholder="Placeholder" className="loginput rounded-md w-72 h-8 border-3 p-4 text-white "></input>
        </div>
        <div>
        <a href="/home" className="buttonbackcolor rounded-md py-3 px-8 text-white" >Login</a>
        </div>
      </div>
  
    );
  }
}

export default FirstLogin;
