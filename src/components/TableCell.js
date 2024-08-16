import React from "react"

export default function TableCell(props) {
    const {isHeader, text} = props
    return (
        isHeader ? <h4 className="tableCell">{text}</h4> : <p className="tableCell">{text}</p> 
    )
}