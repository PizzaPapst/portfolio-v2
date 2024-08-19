import React from 'react'

function Fotogrid(props) {
    const {imgs} = props
    
    const middleIndex = Math.ceil(imgs.length / 2)
    const firstHalf = imgs.slice(0, middleIndex).map((item, index)=> <img src={item.url} className='fotogrid-image' alt={item.desc} />)
    const secondHalf = imgs.slice(middleIndex).map((item, index)=> <img src={item.url} className='fotogrid-image' alt={item.desc}/>)

  return (
    <div className="about-fotos-container">
        <div className="about-fotos-container-left">
            {firstHalf}
        </div>
        <div className="about-fotos-container-right">
            {secondHalf}     
        </div>
    </div>
  )
}

export default Fotogrid
