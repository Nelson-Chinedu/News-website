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
                <p>Politics</p>
              </div>
              <div className="footer-bottom">
                <p><a href="/">Business</a></p>
                <p><a href="/">Markets</a></p>
                <p><a href="/">Tech</a></p>
                <p><a href="/">Luxury</a></p>
              </div>
            </div>

            <div className="footer-third">
              <div className="footer-top">
                <p>Featured</p>
              </div>
              <div className="footer-bottom">
                <p><a href="/">Football</a></p>
                <p><a href="/">Golf</a></p>
                <p><a href="/">Tennis</a></p>
                <p><a href="/">Motorsport</a></p>
                <p><a href="/">Horseracing</a></p>
                <p><a href="/">Sailing</a></p>
              </div>
            </div>

            <div className="footer-fourth">
              <div className="footer-top">
                <p>FAQ</p>
              </div>
              <div className="footer-bottom">
                <p><a href="/">Aviation</a></p>
                <p><a href="/">Business</a></p>
                <p><a href="/">Traveller</a></p>
                <p><a href="/">Destinations</a></p>
                <p><a href="/">Features</a></p>
                <p><a href="/">Food/Drink</a></p>
                <p><a href="/">Hotels</a></p>
                <p><a href="/">Partner Hotels</a></p>
              </div>
            </div>

            <div className="footer-fifth">
              <div className="footer-top">
                <p>&#43;More</p>
              </div>
              <div className="footer-bottom">
                <p><a href="/">Fashion</a></p>
                <p><a href="/">Design</a></p>
                <p><a href="/">Architechture</a></p>
                <p><a href="/">Arts</a></p>
                <p><a href="/">Autos</a></p>
                <p><a href="/">Luxury</a></p>
              </div>
            </div>

          </div>
          <div className="footer-copyright">
            <p>Copyright &copy;2019 All rights reserved | Api from <a href="https://newsapi.org/" target="_blank">News Api</a> </p>
          </div>
        </div>
    )
}

export default Footer;