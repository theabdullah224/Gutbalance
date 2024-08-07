import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Sec1 from "./components/Sec1";
import Mealplanner from './components/MealPlanner';
import Plans from "./components/Plans";
import AboutUs from "./components/AboutUs";
import Subscribe from './components/Subscribe';
import SignUp from './components/Signup';
import LearnMore from './components/Learnmore';
import ContactUs from './components/Contactus';
import './App.css'; // Import your CSS for transitions
import Payment from './components/payment'

function App() {
  const location = useLocation();

  return (
    <TransitionGroup className="transition-group">
      <CSSTransition
        key={location.key}
        classNames="crossfade"
        timeout={1000}
      >
        <div className="route-section">
          <Routes location={location}>
            <Route path="/" element={<Sec1 />} />
            <Route path="/mealplanner" element={<Mealplanner />} />
            <Route path="/plans" element={<Plans />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/subscribe" element={<Subscribe />} />
            <Route path="/exploremealplans" element={<Plans />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/learnmore" element={<LearnMore />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/payment" element={<Payment />} />
          </Routes>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
}

function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWithRouter;
