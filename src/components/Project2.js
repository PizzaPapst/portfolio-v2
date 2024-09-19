import React, { useState, useEffect } from 'react';

import '../styles/project2.css'
import { Link } from "react-router-dom";
import variableImg from '../images/VariableImg.png';
import cursor from '../images/Cursor.png';
import variableIcon from '../images/VariableIcon.svg';
import ds from '../images/designsystem.jpg';


export default function Project() {
    const [isScreenWide, setIsScreenWide] = useState(window.innerWidth > 1000);
    useEffect(() => {
        const handleResize = () => {
          const isWide = window.innerWidth > 1000;
          setIsScreenWide(isWide);
          // Wenn der Bildschirm schmaler als 800px ist, kombiniere beide Hälften zu einem
        };
    
        // Event-Listener hinzufügen
        window.addEventListener('resize', handleResize);
    
        // Bei der ersten Ausführung die Bildschirmgröße prüfen
        handleResize();
    
        // Cleanup: Event-Listener entfernen, wenn die Komponente unmountet
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

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
            {isScreenWide ? 
            <Link to="/designsystem" className="p2-ImgContainer">
                    
                        <img alt="Device" className="variableImg" src={variableImg}/>
                        <img alt="Device" className="cursor" src={cursor}/>
                        <div className="p2-ImgTitleContainer">
                         <p className="ImgTitle">Portfolio <br/>
                        Design System</p>
                        <p className="SubTitle">Inklusive Variablen und Tokens</p>
                        <img className="variableIcon" alt="icon" src={variableIcon}/>
                    </div> 
            </Link> : 
            <Link to="/bachelorarbeit" className="img">
                <img alt="project1thumbnail" className="" src={ds} style={{width: "100%"}}/>
            </Link>
            }
        </div>
    )
}

