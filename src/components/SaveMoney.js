import React from "react";
import "./SaveMoney.css";
import Favicon from "./Resource/favicon.png";
import { useNavigate } from "react-router-dom";

function Cook(props) {
  const navigate = useNavigate();

  const handleLearnMoreClick = () => {
    navigate("/plans?scrollToCard=true");
  };

  const handleSignUpClick = () => {
    navigate("/plans?scrollToCard=true");
  };

  return (
    <div className="savemoney">
      <div className="left-content-2" style={{ order: `${props.orderleft}` }}>
        <div className="contentsave">
          <p className="fancysavemoney text-2xl ">{props.subtitle}</p>
          <h3 className="txt-1savemoney text-4xl 2xl:text-5xl font-bold">
            {props.bspecialtext}
            <span className="specialtxt">{props.specialtext}</span>
            {props.aspecialtext}
          </h3>
          <p className="p-txtsavemoney text-lg">{props.description}</p>
        </div>
        <div className="mainsave">
          <div className="leftsave" style={{ display: `${props.display}` }}>
            <h5 className="fancy1leftsavemoney text-xl font-bold">{props.leftfancy}</h5>
            <p className="p-txtbottom text-lg">{props.descleft}</p>
          </div>

          <div className="leftsave" style={{ display: `${props.display}` }}>
            <h5 className="fancy1leftsavemoney text-xl font-bold">{props.rightfancy}</h5>
            <p className="p-txtbottom text-lg">{props.righdesc}</p>
          </div>
        </div>
        <div className="btns">
          <button className="learnmoresavemoney" onClick={handleLearnMoreClick}>
            Learn&nbsp;More
          </button>
          <button className="signupsavemoney" onClick={handleSignUpClick}>
            Sign&nbsp;Up
          </button>
        </div>
      </div>
      <div className="image-sidesavemoney" style={{ order: `${props.orderimg}` }}>
        <div className="image">
          <div
            className="img-2savemoney"
            style={{
              backgroundImage: `url(${props.bgimg})`,
              transform: `scaleX(${props.imgscale})`,
              left: `${props.left}`,
            }}
          >
            <img
              className="favicon-2"
              src={Favicon}
              alt=""
              style={{ transform: `scaleX(${props.imgscale})` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cook;
