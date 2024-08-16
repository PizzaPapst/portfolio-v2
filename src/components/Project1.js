import React from "react"
import '../styles/project1.css';
import '../styles/textStyles.css';
import device from '../images/device-project1.png';
import { Link } from "react-router-dom";

export default function Project() {
    return (
        <div className="Project">
            <div className="Project-Info">
                <p className="ProjectTitle">Entwicklung einer Anwendung zur Förderung von Bewegungspausen</p>
                <div className="AdditionalInfo">
                    <p className="AddInfo Subinfo">Bachelorarbeit</p>
                    <div className="DividerCircle"></div>
                    <p className="Year Subinfo">2024</p>
                </div>
            </div>
            <div className="DividerContainer">
                <div className="DividerProject"></div>
            </div>
            <Link to="/bachelorarbeit" className="ImgContainer">
                <img alt="Device" className="Device" src={device}/>
                <div className="ImgTitleContainer">
                    <p className="ImgTitle">Pausenhelfer</p>
                    <p className="SubTitle">Bringt Bewegung in deinen Arbeitsalltag</p>
                </div>
            </Link>
        </div>
    )
}