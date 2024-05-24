import React from 'react'
import "../App.css"

const Header = (props) => {
  return (
    <div className='flex shopping-cart'>
      <div className='logo' onClick={()=> props.handleShow(false)}>E-Commerce</div>
      <div className='cart' onClick={()=> props.handleShow(true)}>Cart 
        <sup>{props.count}</sup>
      </div>
    </div>
  )
}

export default Header
