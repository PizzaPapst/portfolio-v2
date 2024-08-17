import React from 'react'

function KPI(props) {
    const kpiStyle = {
        display: "flex",
        maxWidth: "200px",
        flexDirection: "column",
        alignItems: "center",
        gap: "8px",
        padding: "16px",
    }

    const h1Style = {
        background: "linear-gradient(90deg, var(--surface-project1-start), var(--surface-project1-end))",
        webkitBackgroundClip: "text",
        backgroundClip: "text",
        webkitTextFillColor: "transparent"
    }

    const subInfoStyle = {
        textAlign : "center"
    }


  return (
    <div style={kpiStyle}>
        <h1 style={h1Style}>{props.kpi}</h1>
        <p className='Subinfo' style={subInfoStyle}>{props.text}</p>
    </div>
  )
}

export default KPI