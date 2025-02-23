import React from 'react'
import IconButton from "./IconButton"
import { width } from '@fortawesome/free-brands-svg-icons/fa42Group'

function Footer() {
        const footerStyle = {
        width: "100%",
        display: "flex",
        gap: "8px",
        alignItems: "center",
        justifyContent: "center",
        padding: "8px 0"
    }

  return (
    <div className='Footer' style={footerStyle}>
        <a href='mailto:maik.bartels2@gmail.com?subject=&body=' className='footer-link'>maik.bartels2@gmail.com</a>
        <div style={{
            width: "4px",
            height: "4px",
            backgroundColor: "#2A394E",
            borderRadius: "50%"
        }} />
        <a href='https://www.linkedin.com/in/maik-bartels-ab9a8721a' target='_blank' className='footer-link'>Linkedin</a>
    </div>
  )
}

export default Footer