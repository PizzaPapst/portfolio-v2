import React from 'react'
import '../styles/carousel.css';
import IconButton from './IconButton';

function Carousel(props) {
  const {data} = props
  const [currentIndex, setCurrentIndex] = React.useState(0)

  const dots = data.map((img, imgIndex)=>{
    return (
        <button onClick={()=>jumpToImg(imgIndex)} className={imgIndex === currentIndex ? "carousel--dot--active" : "carousel--dot"}></button>
    )
  })

  // handling functions
  function goToPrev(){
    const isFirstImg = currentIndex === 0
    const newIndex = isFirstImg ? data.length-1 : currentIndex -1
    setCurrentIndex(newIndex)
  }

  function goToNext(){
    const isLastImg = currentIndex === data.length - 1
    const newIndex = isLastImg ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  function jumpToImg(imgIndex){
    setCurrentIndex(imgIndex)
  }


    return (
    <div>
        <div className='carousel--imageContainer'>
          <p className='Subinfo'>{data[currentIndex].desc}</p>
          <img src={data[currentIndex].url} className='carousel--image'/>
        </div>
        <div className='carousel-dots-container'>
          <IconButton icon="fa-solid fa-arrow-left" handleClick={goToPrev} iconColor="#666666"/>
          {dots}
          <IconButton icon="fa-solid fa-arrow-right" handleClick={goToNext} iconColor="#666666"/>
        </div>
    </div>
  )
}

export default Carousel