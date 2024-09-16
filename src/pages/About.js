import React from "react"
import '../styles/About.css';
import aboutImg from '../images/PA0206093.png';
import '../styles/textStyles.css';
import Fotogrid from "../components/Fotogrid";

export default function About() {

    React.useEffect(()=>{
        window.scrollTo(0,0)
    }, [])

    const fotos = [
        {
            url: "about/about0.jpeg",
            desc: "a"   
        },
        {
            url: "about/about1.jpg",
            desc: ""   
        },
        {
            url: "about/about2.jpg",
            desc: ""   
        },
        {
            url: "about/about3.jpg",
            desc: ""   
        },
        {
            url: "about/about4.jpg",
            desc: ""   
        },
        {
            url: "about/about5.jpeg",
            desc: ""   
        }
    ]

    return (
        <div className="about">
            <section className="section--default">
                <div className="about-intro">
                    <img className="about-intro-img" alt="Maik" src={aboutImg}/>
                    <div className="about-intro-text">
                        <h2>Hi, ich bin Maik 👋</h2>
                        <p>Moin zusammen, ich bin 25 Jahre alt und wohne aktuell in Hamburg. In meiner Freizeit betreibe oder schaue ich gerne Sport.</p>
                        <p>Aktuell absolviere ich meinen Master in Medieninformatik an der technischen Hochschule in Lübeck. Schwerpunkt liegt dabei auf Human-ComputerI-Interaction (HCI) und Interactive 3D. </p>
                        <p>Mein Ziel ist es, Software zu gestalten, welche für jeden Menschen bedienbar ist. Die Ziele und Bedürfnisse der Nutzer sind dabei für mich das wichtigste beim designen. Besonders gefällt mir die Arbeit im Team. Was Teamwork bedeutet durfte ich bei der Bundeswehr lernen, wo ich vor dem start meines Studiums beschäftigt war.</p>
                        <p>Möchtest du mehr über meinen Werdegang erfahren, gucke dir gerne meinen Lebenslauf an oder schreibe mir persönlich!</p>
                    </div>
                    
                </div> 
            </section>
            
            <section className="section--alternation">
                <div className="about-fotos">
                    <h2>Fotobox</h2>
                    <Fotogrid imgs={fotos}/>
                </div> 
            </section>
        </div>
    )
}