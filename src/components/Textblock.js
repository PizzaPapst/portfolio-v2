import React from "react"

export default function Textblock(props) {
    const {text} = props
    return (
        <p className="textblock">{text}</p> 
    )
}