import React from 'react'
import '../styles/carousel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Carousel(props) {
  const {imgs} = props
  const [currentIndex, setCurrentIndex] = React.useState(0)

  const sliderStyles = {
    width: "100%",
    height: "450px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${imgs[currentIndex].url})`,
    borderRadius: "8px",
  } 

  const dots = imgs.map((img, imgIndex)=>{
    return (
        <button onClick={()=>jumpToImg(imgIndex)} className={imgIndex === currentIndex ? "carousel--dot--active" : "carousel--dot"}></button>
    )
  })

  // handling functions
  function goToPrev(){
    const isFirstImg = currentIndex === 0
    const newIndex = isFirstImg ? imgs.length-1 : currentIndex -1
    setCurrentIndex(newIndex)
  }

  function goToNext(){
    const isLastImg = currentIndex === imgs.length - 1
    const newIndex = isLastImg ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  function jumpToImg(imgIndex){
    setCurrentIndex(imgIndex)
  }

    return (
    <div>
        <div style={sliderStyles}>
        </div>
        <div className='carousel-dots-container'>
            <button className="carousel-prev-btn" onClick={goToPrev}>
                <FontAwesomeIcon icon="fa-solid fa-arrow-left" />
            </button>
            {dots}
            <button className="carousel-next-btn" onClick={goToNext}>
                <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
            </button>
        </div>
    </div>
  )
}

export default Carousel