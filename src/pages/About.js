import React from "react"
import '../styles/About.css';
import aboutImg from '../images/aboutImg.png';
import '../styles/textStyles.css';

export default function About() {
    return (
        <div className="about">
            <div className="about-Content">
                <div className="about-Intro">
                    <img alt="Maik" src={aboutImg}/>
                    <div className="about-text">
                        <h2>Hi, ich bin Maik 👋</h2>
                        <div className="Paragraphs">
                            <p>Moin zusammen, ich bin 25 Jahre alt und wohne aktuell in Hamburg. In meiner Freizeit betreibe oder schaue ich gerne Sport.</p>
                            <p>Aktuell absolviere ich meinen Master in Medieninformatik an der technischen Hochschule in Lübeck. Schwerpunkt liegt dabei auf Human-ComputerI-Interaction (HCI) und Interactive 3D. </p>
                            <p>Mein Ziel ist es, Software zu gestalten, welche für jeden Menschen bedienbar ist. Die Ziele und Bedürfnisse der Nutzer sind dabei für mich das wichtigste beim designen. Besonders gefällt mir die Arbeit im Team. Was Teamwork bedeutet durfte ich bei der Bundeswehr lernen, wo ich vor dem start meines Studiums beschäftigt war.</p>
                            <p>Möchtest du mehr über meinen Werdegang erfahren, gucke dir gerne meinen Lebenslauf an oder schreibe mir persönlich!</p>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}