import React from 'react';
import Favicon from "./Resource/favicon.png";
import './save.css';
import icon1 from './Resource/garbage.png';
import icon2 from './Resource/touchless.png';
import icon3 from './Resource/ingredients.png';
import { useNavigate } from 'react-router-dom';

function Save(props) {
  const navigate = useNavigate();

  const handleLearnMoreClick = () => {
    navigate('/learnmore'); // Navigate to Mealplans route
  };

  const handleSignUpClick = () => {
    navigate('/signup'); // Navigate to Sign Up route
  };

  return (
    <div className='save'>
      <div className="left-contentsave">
        <div className="contentsave">
          <p className='fancys text-2xl'>Save</p>
          <h3 className='txt-s text-4xl 2xl:text-5xl font-bold' lang="en">Save Money And Eat Well With Meal Planning</h3>
          <p className='p-txts text-lg'>
            Efficient meal planning can lead to significant cost savings by reducing food waste and avoiding unnecessary purchases. With our 6-day meal planner, you'll have a clear plan for your meals, ensuring you only buy what you need and making the most of your ingredients.
          </p>
        </div>
        <div className="main">
          <div className="itemssave">
           

            <div className="onesave">
              <img src={icon1} alt="" className="icon1" />
              <p className='ponesave text-lg'>Reduce Food Waste</p>
            </div>
            <div className="onesave">
              <img src={icon2} alt="" className="icon1" />
              <p className='ponesave text-lg'>Avoid Unnecessary Purchases</p>
            </div>
            
            <div className="onesave">
              <img src={icon3} alt="" className="icon1" />
              <p className='ponesave text-lg'>Make the Most of Your Ingredients</p>
            </div>
          </div>
          <div className="dbtnsave">
            <button
              className="learnmoresave"
              onClick={handleLearnMoreClick}
            >
              Learn&nbsp;More
            </button>
            <button
              className="signupsave"
              onClick={handleSignUpClick}
            >
              Sign&nbsp;Up
            </button>
          </div>
        </div>
      </div>
      <div className="image-sidesavec">
        <div className="image">
          <div className="imgd" style={{ backgroundImage: `url(${props.srcimg})` }}>
            <img className='favicon11' src={Favicon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Save;
