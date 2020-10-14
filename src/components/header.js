import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import './navbar.css'
import styled from 'styled-components'

class Heaer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        let lastItem = ''
        if( localStorage.getItem('logged')==='yes' ){
            lastItem = (
                <ul class="navbar-nav navbar-nav-right">
                    <li class="nav-item"> 
                        <NavLink className="navbar-brand" to="/mycart" >My Cart</NavLink>
                    </li>
                    <li class="nav-item"> 
                        <a href='/' className='navbar-brand' onClick={()=>{localStorage.setItem('logged', 'no')}}>Logout</a>
                    </li>
                </ul>
            )
        }else{
            lastItem = (
            <ul class="navbar-nav navbar-nav-right">
                <li class="nav-item">
                    <NavLink className="navbar-brand" to="/login" >Login</NavLink>
                </li>
                <li class="nav-item">
                    <NavLink className="navbar-brand" to="/register" >Register</NavLink>            
                </li>
                <li class="nav-item">
                    <NavLink className="navbar-brand" to="/" onClick={()=>{localStorage.clear()}} >Clear my data</NavLink>            
                </li>
            </ul>)
        } 

        return ( 
            <nav class="navbar navbar-expand-lg navbar p-3 mb-5 shadow lon fixed-top ">
                {/* <BrowserRouter> */}
                <NavLink className="navbar-brand" to="/" > 
                 <img src="https://www.flaticon.com/premium-icon/icons/svg/2926/2926754.svg"width="100px" height="50px"/></NavLink>
                {/* </BrowserRouter> */}
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse"  id="main_nav">
                    <ul class="navbar-nav mr-auto">
                       
                        <li class="nav-item">
                            <NavLink className="navbar-brand " activeClassName="nav-link active" to="/" >Home &nbsp;- </NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink className="navbar-brand"activeClassName="nav-link active" to="/galary" >Gallary &nbsp;- </NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink className="navbar-brand"activeClassName="nav-link active" to="/about-us" >About Us &nbsp;- </NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink className="navbar-brand"  activeClassName="nav-link active"to="/contact-us" >Contact Us</NavLink>
                        </li>
                        
                    </ul> 
                    <ul class="navbar-nav navbar-nav-right">
                        {lastItem}
                    </ul>
                </div>
                
            </nav>
         );
    }
}
 
export default Heaer;