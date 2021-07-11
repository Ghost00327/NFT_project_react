import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="w-screen">
        <div className="w-full">
          <header style={{backgroundColor:'#273142'}} className="flex justify-between" >
            <div className="flex-1">
              <p className="py-8 px-8 text-white">Spotted Pancake</p>
            </div>
            <div className="px-8 py-6">
              <p className="text-white px-9">Version 1</p>
              <p style={{color:'#939bae'}}>License: Giurgi</p>
            </div>
          </header>
        </div>
        {this.props.children}
      </div>
      
    );
  }
}

export default Header;
