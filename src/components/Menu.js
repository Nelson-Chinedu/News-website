import React from 'react';
import { Link } from 'react-router-dom';

const Menu = ()=>{
    return(
        <div className="containe">
          <nav className="navbar navbar-default">
            <div className="container">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span> 
                </button>
                <a className="navbar-brand"  href="/">The News Paper</a>
              </div>
              <div className="collapse navbar-collapse" id="myNavbar">
              <ul className="nav navbar-nav">
                <li className="active"><Link to="/">Home</Link></li>
                <li><Link to="/politics">Politics</Link></li>
                <li><Link to="/business">Business</Link></li>
                  <li className="dropdown">
                    <a className="dropdown-toggle" data-toggle="dropdown" href="/">Sports
                    <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a href="/">Football</a></li>
                  <li><a href="/">Basketball</a></li>
                  <li><a href="/">Tennis</a></li>
                </ul>
               </li>
               <li><Link to="/education">Education</Link></li>
               <li><Link to="/technology">Technology</Link></li>
               <li><Link to="/health">Health</Link></li>
               <li><Link to="/entertainment">Entertainment</Link></li>
             </ul>
           </div>
           </div>
        </nav>
      </div>
    )
};

export default Menu