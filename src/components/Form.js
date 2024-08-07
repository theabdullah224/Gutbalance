import React, { useState } from 'react'
import Card from "./Card"
import "./Form.css"
import Loader from "./Svgloader"

function Form() {
  const [loading, setLoading] = useState(false);

  return (
    <div className='form relative h-fit'>
      <h3 className='fancyform text-2xl'>Choose Plan</h3>
      <h2 className='h2form text-4xl 2xl:text-5xl font-bold'>Choose Your Plan Type</h2>
      
      {loading && (
          <div className=" flex items-center justify-center">
            <Loader />
          </div>
        )}
      <div className="relative">
               <Card setLoading={setLoading} />
      </div>
      
    </div>
  )
}

export default Form