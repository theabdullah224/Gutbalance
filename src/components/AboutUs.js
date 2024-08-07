import React from "react";
import Header from "./Header";
import Frontpage from "./FrontPage";
import { useNavigate } from "react-router-dom";
import planimg from "./Resource/plansbg.jpg";
import lastimg from "./Resource/lastimg.jpg";
import Tab from "./Tab";
import Footer from "./Footer";
import Cta from "./Cta";
import Copyright from "./Copyright";
import Favicon from "./Resource/favicon.png";
import "./about.css";
function AboutUs() {
  const navigate = useNavigate();

  const handleLearnMoreClick = () => {
    navigate("/learnmore");
  };

  const handleSignUpClick = () => {
    navigate("/signup");
  };

  return (
    <div>
      <Header />
      <Frontpage
        bgimg={planimg}
        display="none"
        title="Uncover the Benefits"
        description={`Discover our mission to promote healthy eating and sustainable lifestyles. As Steve Jobs used to say, "Let food be thy medicine and medicine be thy food."`}
      />
      <div className="savemoney">
        <div className="left-content-2" id="aboutleft">
          <div className="contentsave">
            <p className="fancysavemoney text-2xl">Healthy</p>
            <h3 className="txt-1savemoney text-4xl 2xl:text-5xl font-bold">
              How Our Meal Planner Supports These Diets
            </h3>
            <p className="p-txtsavemoney text-lg">
              Our meal planner is designed using the latest technology and
              scientific principles to adhere to the guidelines of the
              Mediterranean and Centenarian diets. By embracing these diets, you
              can enjoy a variety of healthy meals that promote longevity and
              overall health.
            </p>
          </div>
          <div className="mainsave">
            <div className="leftsave">
              <h5 className="fancy1leftsavemoney text-xl font-bold">Benefits</h5>
              <p className="p-txtbottom text-lg">
                Promotes heart health, weight management, and a balanced intake
                of nutrients.
              </p>
            </div>

            <div className="leftsave">
              <h5 className="fancy1leftsavemoney text-xl font-bold">Sustainability</h5>
              <p className="p-txtbottom text-lg">
                Emphasizes seasonal, plant-based ingredients and reduces
                reliance on processed foods.
              </p>
            </div>
          </div>
          <div className="btns">
            <button
              className="learnmoresavemoney"
              onClick={handleLearnMoreClick}
            >
              Learn More
            </button>
            <button className="signupsavemoney" onClick={handleSignUpClick}>
              Sign Up
            </button>
          </div>
        </div>
        <div className="image-sidesavemoney" id="imageabout">
          <div className="image">
            <div
              className="img-2savemoney"
              style={{
                backgroundImage: `url(${lastimg})`,
                transform: `scaleX(1)`,
              }}
            >
              <img
                className="favicon-2"
                src={Favicon}
                alt=""
                style={{ transform: `scaleX(1)` }}
              />
            </div>
          </div>
        </div>
      </div>

      <Tab />
      <Cta
        title="Still have Questions ?"
        description="Feel free to reach out to us."
      />
      <Footer />
      <Copyright />
    </div>
  );
}

export default AboutUs;
