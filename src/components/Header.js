import React from 'react';

const Header = ()=>{
    return(
        <div id="main-header">
            <div className="header-wrapper">
            <div className="header-lt">
                <a href="/" className="brand-title">The News Paper</a>
                <p className="brand-motto">Everything News & Lifestyle...</p>
            </div>
            <div className="header-rt">
                <input type="text" placeholder="Search" className="input-search" />
            </div>
            </div>
        </div>
    )
};


export default Header;