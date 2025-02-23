import React from "react"
import Project1 from '../components/Project1'
import Project2 from '../components/Project2'
import Card from "../components/Card";
import '../styles/Work.css';
import '../styles/textStyles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, fab)


function Work() {
  
  React.useEffect(()=>{
    window.scrollTo(0,0)
  }, [])
  
  return (
    <div className="Work">
      <div className='Intro'>
        <div className='Info-Title'>
          <h1 className="Title">Hey✌🏼Ich bin Maik Willkommen auf meinem Portfolio</h1>
          <div className='Title-location'>
            <p className='Subinfo-h1'>UX Designer</p>
            <div className='Divider'></div>
            <p className='Subinfo-h1'>Hamburg</p>  
          </div>
          
        </div>
      </div>
      <div className='Content'>
        <div className="Cards">
          <Card path="/about" text="Lorem Ipsum" color="#E1C0FF" rotation={3} project="Bachelorarbeit"/>
          <Card path="/designsystem" text="Erstellung eines Design Systems in Figma" color="#9CE8A1" rotation={-2} project="Persönliches Projekt" />
          <Card path="/bachelorarbeit" text="Entwicklung einer Anwendung zu Förderung von Bewegungspausen" color="#96DBFF" rotation={2} project="Bachelorarbeit" />
        </div>
      </div>
    </div>
  );
}

export default Work;
