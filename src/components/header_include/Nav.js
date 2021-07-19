import React, { Component } from 'react';
import Drophead from './Drophead';
class Nav extends Component {
 
  render() {
    return (
              <div class="w-full row lg:items-center lg:w-auto lg:hidden" id="nav-content">
                <ul class="list-reset items-center">
                  <li class="mr-3">
                    <a class="inline-block text-black-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" href="#">Browse</a>
                  </li>
                  <li class="mr-3">
                    <a class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" href="#">Discover</a>
                  </li>
                  <li class="mr-3">
                    <a class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" href="#">Mint an item</a>
                  </li>
                  <li class="mr-3">
                    <a class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" onClick={this.props.toggleModal1} style={{ cursor: "pointer" }}>login</a>
                  </li>
                  <li class="mr-3">
                    <a class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" onClick={this.props.toggleModal2} style={{ cursor: "pointer" }}>create Account</a>
                  </li>
                  <li className="mr-3">
                    <a className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" style={{ cursor: "pointer" }}><Drophead /></a>
                  </li>
                </ul>
              </div>
    );
  }
}

export default Nav;
