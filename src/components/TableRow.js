import React from "react"
import TableCell from "./TableCell"

export default function TableRow(props) {
    const {isHeader, text, alternation, isEnd} = props
    console.log(alternation)
    console.log(isEnd)    

    let className = "tableRow"
    if(isHeader){
        className = "tableRow table--header"
    } else {
        if(alternation && isEnd){
            className = "tableRow table--alternation table--end"
        } else if(alternation){
            className = "tableRow table--alternation"
        } else if(isEnd){
            className = "tableRow table--end"
        }
    }

    console.log(className)

    const tableCells = text.map((item)=>{
        return <TableCell isHeader={isHeader} text={item} />
    })

    return (
        <div className={className}>
            {tableCells}
        </div>

    )
}