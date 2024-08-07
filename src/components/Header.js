import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import "./header.css";
import Logo from "./Resource/logo.png";
import Logo2 from "./Resource/logo2.png";
import Menu from "./Resource/menu.png";
import CloseIcon from "./Resource/close.png";

function Header(props) {
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const handleSubscribeClick = () => {
    navigate('/subscribe');
  };

  const handleExploreMealPlansClick = () => {
    navigate('/exploremealplans');
  };

  return (
    <>
      <header>
          <Link to="/">
          <img className='logo' src={Logo2} alt="Logo" />
          </Link>
       
        <div className="menu">
          <ul className='text-sm '>
            <li className='text-sm   lg:text-lg 2xl:text-xl ' ><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
            <li className='text-sm   lg:text-lg 2xl:text-xl  '><Link to="/mealplanner" className={location.pathname === '/mealplanner' ? 'active' : ''}>Meal Planner</Link></li>
            <li className='text-sm   lg:text-lg 2xl:text-xl  '><Link to="/aboutus" className={location.pathname === '/aboutus' ? 'active' : ''}>About Us</Link></li>
            <li className='text-sm   lg:text-lg 2xl:text-xl  '><Link to="/plans" className={location.pathname === '/plans' ? 'active' : ''}>Login/Subs</Link></li>
           
          </ul>
        </div>
        <img className='btn-menu' src={Menu} alt="Menu" onClick={toggleSidebar} />
      </header>

      <div className={`sidebar ${isSidebarVisible ? 'visible' : ''}`}>
        <img className="close-btn" src={CloseIcon} alt="Close" onClick={toggleSidebar} />
        <ul>
          <li><Link to="/" onClick={toggleSidebar} className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
          <li><Link to="/mealplanner" onClick={toggleSidebar} className={location.pathname === '/mealplanner' ? 'active' : ''}>Meal Planner</Link></li>
          <li><Link to="/plans" onClick={toggleSidebar} className={location.pathname === '/plans' ? 'active' : ''}>Plans</Link></li>
          <li><Link to="/aboutus" onClick={toggleSidebar} className={location.pathname === '/aboutus' ? 'active' : ''}>About Us</Link></li>
          <li><button className='b-subs' onClick={handleSubscribeClick}>Subscribe</button></li>
        </ul>
      </div>

      <div className={`overlay ${isSidebarVisible ? 'visible' : ''}`} onClick={toggleSidebar}></div>
    </>
  );
}

export default Header;
