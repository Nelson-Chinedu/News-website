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
                  <li className="dropdown">
                    <a className="dropdown-toggle" data-toggle="dropdown" href="/">Page 1
                    <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a href="/">Page 1-1</a></li>
                  <li><a href="/">Page 1-2</a></li>
                  <li><a href="/">Page 1-3</a></li>
                </ul>
               </li>
               <li><a href="/">Politics</a></li>
               <li><a href="/">Breaking News</a></li>
               <li><a href="/">Business</a></li>
             </ul>
           </div>
           </div>
        </nav>
      </div>
    )
};

export default Menu