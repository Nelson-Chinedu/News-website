import React from 'react';

const Footer = ()=>{
    return(
        <div id="footer-wrapper">
          <div className="footer-container">
            <div className="footer-first">
              <div className="footer-top">
                <a href="/" >The News Paper</a>
                <p className="nav-title">Everything News &amp; Lifestyle</p>
              </div>
              <div className="footer-bottom">
                <p>contact@yourmail.com</p>
                <p>+234 9028 899</p>
                <p>www.yoursite.com</p>
              </div>
            </div>

            <div className="footer-second">
              <div className="footer-top">
                <a href="/">Politics</a>
              </div>
              <div className="footer-bottom">
                <p>Business</p>
                <p>Markets</p>
                <p>Tech</p>
                <p>Luxury</p>
              </div>
            </div>

            <div className="footer-third">
              <div className="footer-top">
                <a href="/">Featured</a>
              </div>
              <div className="footer-bottom">
                <p>Football</p>
                <p>Golf</p>
                <p>Tennis</p>
                <p>Motorsport</p>
                <p>Horseracing</p>
                <p>Sailing</p>
              </div>
            </div>

            <div className="footer-fourth">
              <div className="footer-top">
                <a href="/">FAQ</a>
              </div>
              <div className="footer-bottom">
                <p>Aviation</p>
                <p>Business</p>
                <p>Traveller</p>
                <p>Destinations</p>
                <p>Features</p>
                <p>Food/Drink</p>
                <p>Hotels</p>
                <p>Partner Hotels</p>
              </div>
            </div>

            <div className="footer-fifth">
              <div className="footer-top">
                <a href="/">&plus;More</a>
              </div>
              <div className="footer-bottom">
                <p>Fashion</p>
                <p>Design</p>
                <p>Architechture</p>
                <p>Arts</p>
                <p>Autos</p>
                <p>Luxury</p>
              </div>
            </div>

          </div>
          <div className="footer-copyright">
            <p>Copyright &copy;2019 All rights reserved | Made with love from api.org </p>
          </div>
        </div>
    )
}

export default Footer;