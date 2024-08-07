import React from "react";
import "./cta.css";
import { useNavigate } from 'react-router-dom';

function Cta(props) {
  const navigate = useNavigate();

  const handleContactUsClick = () => {
    navigate('/contactus'); 
  };

  return (
    <div className="ctac">
      <div className="cta1c">
        <div className="citemc">
          <h3 className="ctah3c text-2xl">Get in Touch</h3>
          <h2 className="ctah2c text-4xl 2xl:text-5xl font-bold">{props.title}</h2>
          <p className="ctapc text-lg">{props.description}</p>
          <button
            className="ctabtn"
            onClick={handleContactUsClick}
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cta;
