import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = (props) => {
  const navigate = useNavigate();
console.log(props.title +"aaya kya");
  return (
    
    <div className="navContainer">
      <div>
        <span className="title">{props.title}</span>
      </div>
      <div>
        <span onClick={() => navigate("/")}><img src={require('../../assets/images/left-arrow.png')} className="leftArrow" /></span>
        <span><img src={require('../../assets/images/right-arrow.png')} className="rightArrow" /></span>
      </div>
    </div>
  )
}

export default Header