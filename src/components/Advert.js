import React from 'react';
import logo1 from './image/hero-add.gif';

const Advert = ()=>{
    return(
        <div className="advert-container">
            <div className="advert-wrapper">
                <div className="upper-advert">
                    <p className="category-top">Breaking News</p>
                    <p className="news-headline">some text</p>
                </div>
                <div className="bottom-advert">
                    <p className="category-bottom">International</p>
                    <p className="news-headline">some text</p>
                </div>
            </div>
            <div className=" right-advert">
            <img src={logo1} />
            </div>
        </div>
    )
};

export default Advert;