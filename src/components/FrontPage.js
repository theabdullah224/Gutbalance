import React from "react";
import "./frontpage.css";
import favicon from "./Resource/favicon.png";
import { useNavigate } from "react-router-dom";




function FrontPage(props) {
  const navigate = useNavigate();

  const handleLearnMoreClick = () => {
    navigate("/learnmore");
  };

  const handleSignUpClick = () => {
    navigate("/signup");
  };
  return (
    <div
      className="frontpage"
      style={{ backgroundImage: `url('${props.bgimg}')` }}
    >
      <div className="colorpage">
        <div className="fitems">
          <h1 className="fronth1 text-5xl 2xl:text-6xl font-bold">{props.title}</h1>
          <p className="fitemsp text-lg">{props.description}</p>
          <img className="faviconfitem" src={favicon} alt="" style={{ display: `${props.display}` }} />
          <div className="btnsff" style={{display:`${props.btndisplay}`}}>
            <button className="learnmorefront" onClick={handleLearnMoreClick}>
              Learn&nbsp;More
            </button>
            <button style={{border:"2px solid white"}} className="signupfront" onClick={handleSignUpClick}>
              Sign&nbsp;Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FrontPage;
