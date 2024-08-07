import React from 'react'
import Header from './Header'
import './home.css'
// import bg from "./Resource/bg.jpg"
import Banner from './Banner'
import Cook from './Cook'

function Home() {
  return (
    <section className='home'>
      
      <Header/>
      <Banner subtitle="A Meal Planner For You" description=' Discover the benefits of meal planning and enjoy  delicious, nutritious meals every day.'/>
     
    </section>
  )
}

export default Home
