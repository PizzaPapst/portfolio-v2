import React from 'react'
import '../styles/primaryButton.css';

function PrimaryButton(props) {

  return (
    <button className='primaryButton' onClick={props.handleClick}>
        {props.text}
    </button>
  )
}

export default PrimaryButton