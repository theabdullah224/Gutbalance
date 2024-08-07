import React from "react";
import { useNavigate } from "react-router-dom";
import "./testimonnials.css"

function Testimonials(props) {
  const navigate = useNavigate();

  const handleLearnMoreClick = () => {
    navigate('/learnmore');
  };

  const handleSignUpClick = () => {
    navigate('/subscribe'); 
  };

  return (
    <div className="testimonials">
      <div className="box" style={{backgroundImage:`url(${props.bgimg})`,backgroundSize:`${props.bgsize}`}}>
        <div className="testcolor" style={{backgroundColor:`${props.testcolor}`}}>

        <img className="webflow-logo" src={props.logo} alt="Company Logo" style={{display:`${props.imgdisplay}`}} />
        <h3 className="testimonial-subtitle text-2xl" >{props.subtitle}</h3>
        <h1 className="testimonial-title text-4xl 2xl:text-5xl font-bold">{props.title}</h1>
        <p className="testimonial-description text-lg">{props.description}</p>

        <div className="testbuttons" style={{display:`${props.display}`}}>
          <button className="learnmoretesti" onClick={handleLearnMoreClick}>
            Learn&nbsp;More
          </button>
          <button className="signuptesti" style={{backgroundColor:"white",color:"#738065",border:"2px solid #738065"}} onClick={handleSignUpClick}>
            Subscribe
          </button>
        </div>
        <h2 className="testimonial-h2 text-2xl">{props.h2}</h2>
        <p className="testimonial-last text-lg">{props.plast}</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
