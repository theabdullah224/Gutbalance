import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Logo from "./Resource/logo.png";
import Logo2 from "./Resource/logo2.png";
import Facebook from "./Resource/facebook.png";
import x from './Resource/x.png'; // Assuming x is Twitter
import insta from "./Resource/instagram.png";
import linkedin from './Resource/linedin.png';
import youtube from './Resource/youtube.png';
import mail from './Resource/mail.png';
import call from './Resource/call.png';
import location from './Resource/location.png';
import './footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <div className="fcol1">
        <img className='logof' src={Logo2} alt="Logo" />
        <p className='footerp text-lg' style={{margin:"20px 0px 0px 0px "}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        <p className='fancyf text-2xl'>Follow Us</p>
        <div className="logos">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={Facebook} alt="Facebook" className="fb" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={insta} alt="Instagram" className="fb" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={x} alt="Twitter" className="fb" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" className="fb" />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <img src={youtube} alt="YouTube" className="fb" />
          </a>
        </div>
      </div>
      <div className="fcol1 fcol2">
        <h4 className='footerh4 text-xl font-bold'>Quick&nbsp;Links</h4>
        <ul className='ulf'>
          <li><Link className='lia text-lg' to="/">Home</Link></li>
          <li><Link className='lia text-lg' to="/aboutus">About Us</Link></li>
          <li><Link className='lia text-lg' to="/plans">Meal Plans</Link></li>
          <li><Link className='lia text-lg' to="/plantype">Plan Type</Link></li>
        </ul>
      </div>
      <div className="fcol1 fcol3">
        <h4 className='footerh4 text-xl font-bold'>Contact&nbsp;Info</h4>
        <div>
          <img src={location} alt="Location" className="location" />
          <p className='footerp text-lg'>Level 1, 12 Sample Street, Sydney NSW 2000</p>
        </div>
        <div>
          <img src={call} alt="Phone" className="location" />
          <p className='footerp text-lg'>1800 123 4567</p>
        </div>
        <div>
          <img src={mail} alt="Email" className="location" />
          <p className='footerp text-lg'> info@relume.io</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
