import React from 'react'

import './faqs.css'
import Faqcomp from './faqcomp'
function Faq(props) {
  return (
    <div className='faqs'>
      <div className="inside">
        <div className="bgimg"></div>

          <h3 className='fancyfaq text-2xl'>FAQs</h3>
          <h3 className='txt-1faq text-4xl 2xl:text-5xl font-bold' lang="en" >Frequently <span className='specialtxt'> Asked</span> Questions</h3>
          <p className='mdtfaq text-lg'>{props.description}</p>
          <div className="ques">
                <Faqcomp question= {props.question1} ans={props.ans1}/>
                <Faqcomp question= {props.question2} ans={props.ans2}/>
                <Faqcomp question= {props.question3} ans={props.ans3}/>
                <Faqcomp question= {props.question4} ans={props.ans4}/>
                <Faqcomp question= {props.question5} ans={props.ans5}/>
                
                
          </div>
      </div>
    </div>
  )
}

export default Faq
