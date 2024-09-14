import React from "react"
import '../styles/project2.css'
import { Link } from "react-router-dom";
import variableImg from '../images/VariableImg.png';
import cursor from '../images/Cursor.png';
import variableIcon from '../images/VariableIcon24px.png';

export default function Project() {
    return (
        <div className="Project">
            <div className="Project-Info">
                <p className="ProjectTitle">Erstellung eines Design Systems in Figma</p>
                <div className="AdditionalInfo">
                    <p className="AddInfo Subinfo">Persönliches Projekt</p>
                    <div className="DividerCircle"></div>
                    <p className="Year Subinfo">2024</p>
                </div>
            </div>
            <div className="DividerContainer">
                <div className="p2-DividerProject"></div>
            </div>
            <Link to="/designsystem" className="p2-ImgContainer">
                <img alt="Device" className="variableImg" src={variableImg}/>
                <img alt="Device" className="cursor" src={cursor}/>
                <div className="p2-ImgTitleContainer">
                    <p className="ImgTitle">Portfolio <br/>
                    Design System</p>
                    <p className="SubTitle">Inklusive Variablen und Tokens</p>
                    <img className="variableIcon" alt="icon" src={variableIcon}/>
                </div>
            </Link>
        </div>
    )
}