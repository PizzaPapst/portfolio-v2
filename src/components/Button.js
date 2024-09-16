import React from 'react'
import '../styles/button.css';

function Button(props) {

  return (
    <button className='button' onClick={props.handleClick}>
        {props.text}
    </button>
  )
}

export default Button