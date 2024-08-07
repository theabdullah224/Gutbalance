import React from 'react';
import './WeeklyOverlap.css';
import { useNavigate } from 'react-router-dom';
import Favicon from './Resource/favicon.png'

function WeeklyOverlap(props) {
  const navigate = useNavigate();

  const handleLearnMoreClick = () => {
    navigate('/learnmore'); 
  };

  const handleSignUpClick = () => {
    navigate('/signup'); 
  };

  return (
    <div className='weeklyoverlap'>
      <div className="weekly" style={{ backgroundImage: `url(${props.bgimg})` }}>
        <div className="colorweekly">
          <div className='itemweekly'>
            <h4 className='fancy-txtweekly text-2xl'>{props.subtitle}</h4>
            <h2 className='txt-h2weekly text-4xl 2xl:text-5xl font-bold' style={{fontSize:`${props.titlefont}`}}>{props.title}</h2>
            <p className='mdtweekly text-lg font-normal'>
              {props.description}
            </p>





            <div className="input" style={{display:`${props.inputdisplay}`}}>

              <input  className='weeklyemail' id='weeklymailover' type="email" placeholder='Enter Your Email Address' />


              <button
              id='weeklymailover'
              className='weeklysignupmail'
               
                onClick={handleSignUpClick}
              >
                Sign Up
              </button>
            <p className='mdtweekly text-lg'>
              {props.downbtndescription}
            </p>
            </div>





            <div className="btns" style={{display:`${props.btndisplay}`}}>
              <button
                className="learnmoreweekly"
                onClick={handleLearnMoreClick}
              >
                Learn&nbsp;More
              </button>
              <button
                className="signupweekly"
                onClick={handleSignUpClick}
              >
                Sign&nbsp;Up
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-img" style={{ backgroundImage: `url(${props.bgfront})` }}>
        <img className='wfv' src={Favicon} alt="" style={{display:`${props.displayfvicon}`}} />
      </div>

    </div>
  );
}

export default WeeklyOverlap;
