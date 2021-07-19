import React, { Component } from 'react';
import logo from '../img/newlogo.png';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import ReactDOM from "react-dom";
import Nav from "./header_include/Nav.js";
import Login from "./Auth/Login.js";
import Signup from "./Auth/Signup.js";
import Drophead from "./header_include/Drophead.js";
import Category from "./header_include/Category.js";
import Footer from "./Footer.js";
import Divider from '@material-ui/core/Divider';
import MainItemModal from './modal/MainItemModal';

class Header extends Component {
    

    constructor(){
      super();
      this.state={
          show:false
      }
      this.toggleModal1 = this.toggleModal1.bind(this)
      this.toggleModal2 = this.toggleModal2.bind(this)
      this.toggleModal3 = this.toggleModal3.bind(this)
    }
    state = {
      logModal: false,
      signupModal: false,
      mainItemModal: false
    }

    toggleModal1 = () => {
      this.setState(prevState => ({
        logModal: !prevState.logModal
      }))
    }
    toggleModal2 = () => {
      this.setState(prevState => ({
        signupModal: !prevState.signupModal
      }))
    }
    toggleModal3 = () => {
      this.setState(prevState => ({
        mainItemModal: !prevState.mainItemModal
      }))
    }
    closeModal1 = () => {
      this.setState(preveState => ({
        logModal: false
      }))
    }
    closeModal2 = () => {
      this.setState(preveState => ({
        signupModal: false
      }))
    }
    closeModal3 = () => {
      this.setState(preveState => ({
        mainItemModal: false
      }))
    }
   
  
  render() {
    return (
      <div className="w-screen" ref={el => (this.div = el)}>
        <div className="w-full">
          <header className="flex " >
            <nav className="flex items-center justify-between flex-wrap lg:flex-nowrap p-4 fixed w-full z-10 top-0 bg-white effect-4">
              <div className="flex items-center flex-shrink-0 text-white mr-6">
                <img src={logo} width="120" height="auto" alt="logo" />
                {/* className="w-12 h-12 sm:w-16 sm:h-16" */}
              </div>
              <div className="flex items-center  mr-6 rounded-md lg:float-left"  style={{border:"solid 3px #eaeaff"}}>
                <input id="cat" name="catigory" className="h-8 w-8 md:w-18 lg:w-28" placeholder="Search All catigory" style={{background: "#f2f2ff"}}></input>
                <select name="cars" id="cars" className="w-16 md:w-28 lg:w-36 h-8" style={{background: "#ededff"}}>
                  <option className="w-16 md:w-48 lg:w-52" value="all" defaultValue disabled hidden>Type</option>
                  <option value="all">ALL</option>
                  <option value="Digital phptographs">Digital phptographs</option>
                  <option value="Fractal Art">Fractal Art</option>
                  <option value="Data-Moshing">Data-Moshing</option>
                  <option value="Dynamic Painting">Dynamic Painting</option>
                  <option value="2D Coumputer Graphics">2D Coumputer Graphics</option>
                  <option value="3D Computer Graphics">3D Computer Graphics</option>
                  <option value="Pixel Art">Pixel Art</option>
                  <option value="Photo-Painting">Photo-Painting</option>
                  <option value="Digital Colleage">Digital Colleage</option>
                  <option value="2D Digital Painting">2D Digital Painting</option>
                  <option value="3D Digital Painting">3D Digital Painting</option>
                  <option value="Manual Vector Drawing">Manual Vector Drawing</option>
                  <option value="Mixed Media / Hybird Painting">Mixed Media / Hybird Painting</option>
                  <option value="Raster Painting">Raster Painting</option>
                  <option value="Computer-Genderated Painting">Computer-Genderated Painting</option>
                </select>
                <a style={{background: "#ededff", color:"black"}} className="h-8 w-8" href="browse"><SearchOutlinedIcon style={{marginTop:'3px'}}/></a>
              </div>

              <div className="block lg:hidden">
                <button id="nav-toggle" className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 " onClick={()=>{this.setState({show:!this.state.show})}}>
                  <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
              </div>
              <div>
              
              </div>
              <div className="w-full flex-grow  lg:items-center lg:w-auto hidden lg:block pt-6 lg:pt-0 " id="nav-content">
                <ul className="list-reset lg:flex justify-end flex-1 items-center">
                  <li className="mr-3">
                    <a className="inline-block font-bold text-black no-underline hover:text-gray-600 hover:text-underline py-2 px-2" href="/">Home</a>
                  </li>
                  <li className="mr-3">
                    <a className="inline-block font-bold text-black no-underline hover:text-gray-600 hover:text-underline py-2 px-2" href="browse">Browse</a>
                  </li>
                  <li className="mr-3">
                    <a className="inline-block font-bold text-black no-underline hover:text-gray-600 hover:text-underline py-2 px-2" href="#">Discover</a>
                  </li>
                  <li className="mr-3">
                    <a className="inline-block font-bold text-black no-underline hover:text-gray-600 hover:text-underline py-2 px-2" onClick={this.toggleModal3}>Mint an item</a>
                  </li>
                  <li className="mr-3">
                    <a className="inline-block font-bold text-black no-underline hover:text-gray-600 hover:text-underline py-2 px-2" onClick={this.toggleModal1}>login</a>
                  </li>
                  <li className="mr-3">
                    <a className="inline-block font-bold text-black no-underline hover:text-gray-600 hover:text-underline py-2 px-2"  onClick={this.toggleModal2}>create Account</a>
                  </li>
                  <li className="mr-3">
                    <a className="inline-block font-bold text-black no-underline hover:text-gray-600 hover:text-underline py-2 px-2" style={{ cursor: "pointer" }}><Drophead /></a>
                  </li>
                  <li className="mr-3">
                    <a className="inline-block font-bold text-black no-underline hover:text-gray-600 hover:text-underline py-2 px-2" style={{ cursor: "pointer" }}><Category /></a>
                  </li>
                </ul>
              </div>
              
            </nav>
            
            
            <div className="container shadow-lg mx-auto bg-white mt-24 md:mt-24">
            {/* <div>
                <ul className="flex flex-wrap bg-gray-100">
                      <li className="mr-3">
                        <a className="inline-block font-bold text-green-600 no-underline hover:text-gray-600 hover:text-underline py-2 px-4" href="#">ALL</a>
                      </li>
                      <li className="mr-3">
                        <a className="inline-block font-bold text-green-600 no-underline hover:text-gray-600 hover:text-underline py-2 px-4" href="#">Digtal Photo</a>
                      </li>
                      <li className="mr-3">
                        <a className="inline-block font-bold text-green-600 no-underline hover:text-gray-600 hover:text-underline py-2 px-4" href="#">Fractal Art</a>
                      </li>
                      <li className="mr-3">
                        <a className="inline-block font-bold text-green-600 no-underline hover:text-gray-600 hover:text-underline py-2 px-4" href="#">Data-Moshing</a>
                      </li>
                      <li className="mr-3">
                        <a className="inline-block font-bold text-green-600 no-underline hover:text-gray-600 hover:text-underline py-2 px-4"  href="#">Dynamic Painting</a>
                      </li>
                      <li className="mr-3">
                        <a className="inline-block font-bold text-green-600 no-underline hover:text-gray-600 hover:text-underline py-2 px-4" href="#">2D Computer Graphics</a>
                      </li>
                      <li className="mr-3">
                        <a className="inline-block font-bold text-green-600 no-underline hover:text-gray-600 hover:text-underline py-2 px-4" href="#">3D Computer Graphics</a>
                      </li>
                      <li className="mr-3">
                        <a className="inline-block font-bold text-green-600 no-underline hover:text-gray-600 hover:text-underline py-2 px-4" href="#">Pixel Art</a>
                      </li>
                      <li className="mr-3">
                        <a className="inline-block font-bold text-green-600 no-underline hover:text-gray-600 hover:text-underline py-2 px-4" href="#">Photo Painting</a>
                      </li>
                      <li className="mr-3">
                        <a className="inline-block font-bold text-green-600 no-underline hover:text-gray-600 hover:text-underline py-2 px-4" href="#">Digital Colleage</a>
                      </li>
                      <li className="mr-3">
                        <a className="inline-block font-bold text-green-600 no-underline hover:text-gray-600 hover:text-underline py-2 px-4" href="#">2D Digital Painting</a>
                      </li>
                      <li className="mr-3">
                        <a className="inline-block font-bold text-green-600 no-underline hover:text-gray-600 hover:text-underline py-2 px-4" href="#">3D Digital Painting</a>
                      </li>
                      <li className="mr-3">
                        <a className="inline-block font-bold text-green-600 no-underline hover:text-gray-600 hover:text-underline py-2 px-4" href="#">Mannual Vector Drawing</a>
                      </li>
                      <li className="mr-3">
                        <a className="inline-block font-bold text-green-600 no-underline hover:text-gray-600 hover:text-underline py-2 px-4" href="#">Mixed Media/Hybird Painting</a>
                      </li>
                      <li className="mr-3">
                        <a className="inline-block font-bold text-green-600 no-underline hover:text-gray-600 hover:text-underline py-2 px-4" href="#">Raster Painting</a>
                      </li>
                      <li className="mr-3">
                        <a className="inline-block font-bold text-green-600 no-underline hover:text-gray-600 hover:text-underline py-2 px-4" href="#">Computer Generated Painting</a>
                      </li>
                  </ul>
              </div> */}
              
              {
                  this.state.show? <Nav toggleModal1={this.toggleModal1} toggleModal2={this.toggleModal2} /> : null
              }
            </div>
            
          </header>
        </div>
        <Login open={this.state.logModal} handleClose={this.closeModal1}/>
        <Signup open={this.state.signupModal} handleClose={this.closeModal2} />
        <MainItemModal open={this.state.mainItemModal} handleClose={this.closeModal3} />
        {this.props.children}
        <Footer />
      </div>
      
    );
  }
}

export default Header;
