import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/IconButton.css';

function IconButton(props) {

  return (
    <button className='iconButton' onClick={props.handleClick}>
        <div className='iconButton-iconContainer'>
            <FontAwesomeIcon 
                className='iconButton-icon' 
                icon={props.icon} 
                style={props.iconColor ? ({
                    color: props.iconColor
                    }) : ""}
            />
        </div>
    </button>
  )
}

export default IconButton