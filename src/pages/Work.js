import React from "react"
import fire from '../images/fire.svg';
import ai from '../images/ai.svg';
import cloud from '../images/cloud.svg';
import gear from '../images/gear.svg';
import pencil from '../images/pencil.svg';
import star from '../images/star.svg';
import Avatar from '../components/Avatar'
import Project1 from '../components/Project1'
import Project2 from '../components/Project2'
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
        <div className='Info-container'>
          <Avatar></Avatar>
          <img className="fire bg-icon" alt="" src={fire}/>
          <img className="ai bg-icon" alt="" src={ai}/>
          <img className="cloud bg-icon" alt="" src={cloud}/>
          <img className="gear bg-icon" alt="" src={gear}/>
          <img className="pencil bg-icon" alt="" src={pencil}/>
          <img className="star bg-icon" alt="" src={star}/>
          <div className='Info'>
            <h1>Maik Bartels</h1>
            <div className='Title-location'>
              <p className='Subinfo'>UX Designer</p>
              <div className='Divider'></div>
              <div className='Location'>
                <FontAwesomeIcon className='Subinfo' icon="fa-solid fa-location-dot" />
                <p className='Subinfo'>Hamburg</p>  
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='Content'>
          <Project1/>
          <Project2 />
      </div>
    </div>
  );
}

export default Work;
