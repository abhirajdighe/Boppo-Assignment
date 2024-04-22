import React from 'react'
import Search from './Search'
import "../Style/home.css"

const Home = () => {
  return (
    <div id='main'>
      <div className="home">
        <img src="https://img.freepik.com/free-vector/watercolor-emerald-background_23-2150238649.jpg" alt="" />
      </div>
        <Search/>
        
    </div>
  )
}

export default Home