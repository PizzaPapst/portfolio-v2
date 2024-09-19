import '../styles/project1.css';
import '../styles/textStyles.css';
import device from '../images/device-project1.png';
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import bachelorarbeit from '../images/bachelorarbeit.jpg';


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
            {isScreenWide ? 
            <Link to="/bachelorarbeit" className="ImgContainer">
                    <img alt="Device" className="Device" src={device}/>
                    <div className="ImgTitleContainer">
                        <p className="ImgTitle">Pausenhelfer</p>
                        <p className="SubTitle">Bringt Bewegung in deinen Arbeitsalltag</p>
                    </div> 
            </Link> : 
            <Link to="/bachelorarbeit" className="img">
                <img alt="project1thumbnail" className="" src={bachelorarbeit} style={{width: "100%"}}/>
            </Link>
            }
            
        </div>
    )
}