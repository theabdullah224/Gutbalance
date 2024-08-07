import React, { useState, useEffect } from "react";
import "./banner.css";
import { useNavigate } from "react-router-dom";

function Banner(props) {
  const Heading = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(
      window.innerWidth <= 450
    );

    useEffect(() => {
      const handleResize = () => {
        setIsSmallScreen(window.innerWidth <= 450);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

    return (
      <h1 className="b-h1banner text-5xl 2xl:text-6xl font-bold">
        Transform{isSmallScreen && <br />}{" "}
        <span className="specialtxt">Your Health</span> <br /> With Our Meal
        Planner
      </h1>
    );
  };

  const navigate = useNavigate();
  const handleExploreMealPlansClick = () => {
    navigate("/exploremealplans");
  };

  const handleSubscribeClick =()=>{
    navigate("/subscribe");
  }
  return (
    <div className="b-itemsbanner">
      <div className="b-centerbanner">
        <Heading />
        <h2 className="b-h2banner text-4xl">{props.subtitle}</h2>
        <p className="b-pbanner text-lg">
          Discover the benefits of meal planning and enjoy <br /> delicious,
          nutritious meals every day.
        </p>
        <div>
          
        </div>
        <div className="flex mt-5 flex-wrap items-center gap-3 ">

        <button className="py-5 sm:py-2 px-6 w-auto" onClick={handleExploreMealPlansClick}>
          Explore&nbsp;Meal&nbsp;Plans
        </button>
        <button className='py-5 sm:py-2 px-6 w-auto' onClick={handleSubscribeClick}>Subscribe</button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
