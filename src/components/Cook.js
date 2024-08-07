import React from 'react'
import "./cook.css"
import Favicon from "./Resource/favicon.png"
import gb from "./Resource/gb.png"

function Cook(props) {
  return (
    <div className='cook'>
        

        <div className="left-contentcook">
            <div className="contentcook">

            <p className='fancycook text-2xl '>{props.subtitle}</p>
            <h3 className='txt-1cook text-4xl 2xl:text-5xl font-bold' lang="en">Simplify <span className='specialtxt'> Your Life</span> With Our Convenient And <span className='specialtxt'> Healthy Meal Planning </span>Service</h3>
            <p className='p-txtcook text-lg'>{props.description}</p>
            </div>
        </div>
        <div className="image-sidecook">
            <div className="image">
                <div className="imgcook" style={{backgroundImage:`url(${props.srcimg})`}}>
                    <img className='faviconcook' src={Favicon} alt="" />

                </div>
            </div>
        </div>
        
        
    </div>
  )
}

export default Cook
