import React, { useRef } from 'react';
import './tab.css';
import lady from './Resource/ladywithapple.jpg';

function Tab(props) {
  const heading2Ref = useRef(null);
  const heading3Ref = useRef(null);
  const heading4Ref = useRef(null);
  const heading5Ref = useRef(null);
  const heading6Ref = useRef(null);

  const scrollToHeading = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className='tabimg'>
      <div className="colortab">
        <div className="tableft">
          <div className='tabheadingscontent'>
            <h3 className='text-2xl'>Tabs</h3>
            <h2 className='text-4xl 2xl:text-5xl font-bold'>Table of Content</h2>
            <button className="tab text-base" onClick={() => scrollToHeading(heading2Ref)}>Section&nbsp;1</button>
            <button className="tab text-base" onClick={() => scrollToHeading(heading3Ref)}>Section&nbsp;2</button>
            <button className="tab text-base" onClick={() => scrollToHeading(heading4Ref)}>Section&nbsp;3</button>
            <button className="tab text-base" onClick={() => scrollToHeading(heading5Ref)}>Section&nbsp;4</button>
            <button className="tab text-base" onClick={() => scrollToHeading(heading6Ref)}>Section&nbsp;5</button>
          </div>
        </div>
        <div className="tabright">
          <h2 ref={heading2Ref} className='text-4xl font-bold'>Heading 2</h2>
          <p className='text-lg'>Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.</p>
          <h3 ref={heading3Ref} className='text-3xl font-bold'>Heading 3</h3>
          <p className='text-lg'>Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at.</p>
          <h4 ref={heading4Ref} className='text-2xl font-bold'>Heading 4</h4>
          <p className='text-lg'>Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies.</p>
          <div className="image">
            <div className="img" id='imgtab' style={{backgroundImage:`url(${lady})`,marginBottom:`10vh`,width:`40vw`,height:`70vh`}}></div>
          </div>
          <h5 ref={heading5Ref} className='text-xl font-bold'>Heading 5</h5>
          <p className='text-lg'>Morbi sed imperdiet in ipsum, adipiscing elit dui lectus.</p>
          <p  className="text-lg bggreen">"Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id."</p>
          <h6 ref={heading6Ref} className='text-lg font-bold'>Heading 6</h6>
          <p className='text-lg'>Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa.</p>
        </div>
      </div>
    </div>
  );
}

export default Tab;
