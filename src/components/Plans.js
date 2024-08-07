import React from 'react'
import Header from './Header'
import FrontPage from './FrontPage'
import Plansimg from './Resource/plans.jpg'
import CardNavigator from './Card'
// import { Form } from 'react-router-dom'
import Form from './Form'
import Cta from './Cta'
import Footer from './Footer'
import Copyright from './Copyright'
import './plans.css'
import  { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';





function Plans() {
  const location = useLocation();
  const formRef = useRef(null);

  useEffect(() => {
    if (location.state && location.state.scrollToForm) {
      setTimeout(() => {
        formRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location]);


  return (
    <div>
      <Header/>
      <FrontPage
        title="Choose Your Plan"
        description="Select the meal plan that suits your dietary needs and preferences."
        bgimg={Plansimg}
        display="none"
        btndisplay="none"
      />
      
      <div ref={formRef}>
        <Form/> {/* card component */}
      </div>
      <Cta
        title="Still have Questions ?"
        description="Feel free to reach out to us."
      />
      <Footer/>
      <Copyright/>
    </div>
  )
}

export default Plans
