import React from "react"

export default function SubHeadline(props) {
    const {text} = props
    return (
        <h3 className="sub--headline">{text}</h3> 
    )
}