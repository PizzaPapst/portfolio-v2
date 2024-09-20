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
                        <p>Hey, ich bin 25 Jahre alt, wohne in Hamburg und liebe alles, was mit Sport zu tun hat – egal ob selbst aktiv oder als Zuschauer. Nebenbei mache ich meinen Master in Medieninformatik an der TH Lübeck, wo ich mich auf Human-Computer Interaction (HCI) und Interactive 3D spezialisiere.</p>
                        <p>Mein Ziel? Software designen, die wirklich jeder bedienen kann. Dabei stehen für mich die Bedürfnisse der Nutzer immer im Mittelpunkt. Besonders gern arbeite ich im Team – Teamwork habe ich schon bei der Bundeswehr schätzen gelernt, wo ich vor dem Studium tätig war.</p>
                        <p>Wenn du mehr über meinen Werdegang wissen willst, schau gerne in meinen Lebenslauf oder schreib mir einfach!</p>
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