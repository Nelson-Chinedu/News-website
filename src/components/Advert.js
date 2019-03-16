import React from 'react';
import logo1 from './image/hero-add.gif';

const Advert = ()=>{
    return(
        <div className="advert-container">
            <div className="advert-wrapper">
                <div className="upper-advert">
                    <p className="category-top">Breaking News</p>
                    <p className="news-headline">Mark Zuckerberg: Everything Is Fine, Actually</p>
                </div>
                <div className="bottom-advert">
                    <p className="category-bottom">International</p>
                    <p className="news-headline">Democrats head into 2019 split on everything but Trump</p>
                </div>
            </div>
            <div className=" right-advert">
            <img src={logo1} alt="logo" />
            </div>
        </div>
    )
};

export default Advert;