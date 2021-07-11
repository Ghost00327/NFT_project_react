import React, { Component } from 'react';
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AutoComplete from './AutoComplete';

class RightMain extends Component {
  render() {
    return (
      <div className="darkbackcolor w-max mx-auto pr-10 flex-col py-12">
          <div className="md:mt-24 pb-2">
            <p className="nortextcolor pb-8">WALLET ADDRESS FOR AUTO WITHDRAW</p>
            <div className="relative">
              <input placeholder="Adress" className="loginput text-white rounded-md w-72 h-10 border-3 p-4 mr-4 pl-8"/>
              <div className="absolute w-7 h-100 p-2 rounded-tl-md  rounded-bl-md top-0 fontawesome">
                <FontAwesomeIcon className="text-white top-6 left-3" icon={faUser} />
              </div>
            </div>
          </div>
          <div className="py-2">
            <div className="relative">
              <input placeholder="Name" className="loginput text-white rounded-md w-72 h-10 border-3 p-4 mr-4 pl-8"/>
              <div className="absolute w-7 h-100 p-2 rounded-tl-md  rounded-bl-md top-0 fontawesome">
                <FontAwesomeIcon className="text-white top-6 left-3" icon={faUser} />
              </div>
            </div>
          </div>
          <div className="py-2">
            <input placeholder="Balance to use" className="loginput text-white rounded-md rounded-tr-none rounded-br-none w-64 h-10 border-3 pl-4 pr-0"/>
            <span className="w-7 h-12 p-2 rounded-tr-md  rounded-br-md text-white fontawesome" style={{border:'solid 2px #393e51'}}>%</span>
          </div>
          <div className="py-2">
          <input placeholder="Amount to follow" className="loginput text-white rounded-md rounded-tr-none rounded-br-none w-64 h-10 border-3 pl-4 pr-0"/>
            <span className="w-7 h-12 p-2 rounded-tr-md  rounded-br-md text-white" style={{background:'#dec7c742', border:'solid 2px #393e51'}}>+</span>
          </div>
          <div className="py-2 pb-20">
            <button style={{background:'#7b5be3'}} className="rounded-md py-2 px-8 text-white mx-auto ml-20">Add</button>
          </div>
          <AutoComplete />
      </div>
    );
  }
}

export default RightMain;
