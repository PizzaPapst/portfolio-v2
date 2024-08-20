import React from 'react'
import IconButton from "./IconButton"

function Footer() {
    function handleLinkedIn(){
        window.open("https://www.google.com", "_blank");
    }

    function handleMail(){
        window.location.href = "mailto:maik.bartels2@gmail.com?subject=&body=";
    }

    const footerStyle = {
        width: "100%",
        display: "flex",
        gap: "4px",
        alignItems: "center",
        justifyContent: "center",
        padding: "8px 0"
    }

  return (
    <div className='Footer' style={footerStyle}>
        <IconButton icon="fa-brands fa-linkedin" handleClick={handleLinkedIn}/>
        <IconButton icon="fa-solid fa-envelope" handleClick={handleMail}/>
    </div>
  )
}

export default Footer