import React from 'react';

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
                <li className="active"><a href="/">Home</a></li>
                <li><a href="/">Politics</a></li>
                <li><a href="/">Business</a></li>
                  <li className="dropdown">
                    <a className="dropdown-toggle" data-toggle="dropdown" href="/">Sports
                    <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a href="/">Football</a></li>
                  <li><a href="/">Basketball</a></li>
                  <li><a href="/">Tennis</a></li>
                </ul>
               </li>
               <li><a href="/">Education</a></li>
               <li><a href="/">Technology</a></li>
               <li><a href="/">Health</a></li>
               <li><a href="/">Entertainment</a></li>
             </ul>
           </div>
           </div>
        </nav>
      </div>
    )
};

export default Menu