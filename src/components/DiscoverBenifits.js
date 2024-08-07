import React from 'react';
import "./DiscoverBenifits.css";
import icon1 from './Resource/cultry.png';
import icon2 from "./Resource/recipients.png";
import favicon from "./Resource/favicon.png";
import { useNavigate } from 'react-router-dom';

function DiscoverBenifits(props) {
  const navigate = useNavigate();

  const handleLearnMoreClick = () => {
    navigate('/learnmore'); 
  };

  const handleSignUpClick = () => {
    navigate('/signup'); 
  };

  return (
    <div className='DiscoverBenifits'>
      <h3 className='fancydiscover text-2xl '>{props.subtitle} Sustainable</h3>
      <h2 className='dh2discover text-4xl 2xl:text-5xl font-bold'>Reduce Food <span style={{color:`#738065`}}>Waste</span> with Meal Planning</h2>
      <p className='dpdiscover text-lg'>Discover how meal planning can help you reduce food waste and make a positive impact on the environment.</p>
      <img className='favicondiscover' src={favicon} alt="" />
      <div className="dbtns">
        <button
          className="learnmorediscover"
          onClick={handleLearnMoreClick}
        >
          Learn&nbsp;More
        </button>
        <button
          className="signupdescover"
          onClick={handleSignUpClick}
        >
          Sign&nbsp;Up
        </button>
      </div>
      <div className="cols">
        <div className="col1">
          <img src={icon1} alt="" />
          <h4 className='insidecol1 text-xl font-bold'>Benefits</h4>
          <p className='pcol1 text-lg'>Save money, reduce food waste, and eat healthier with our meal planning service.</p>
        </div>
        <div className="col1">
          <img src={icon2} alt="" />
          <h4 className='insidecol1 text-xl font-bold'>Tips</h4>
          <p className='pcol1 text-lg'>Learn how to plan meals effectively and minimize food waste in your kitchen.</p>
        </div>
      </div>
    </div>
  );
}

export default DiscoverBenifits;
