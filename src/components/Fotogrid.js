import React, { useState, useEffect } from 'react';

function Fotogrid(props) {
  const { imgs } = props;
  const middleIndex = Math.ceil(imgs.length / 2);
  const [isScreenWide, setIsScreenWide] = useState(window.innerWidth > 800);
  const [firstHalf, setFirstHalf] = useState(
    imgs.slice(0, middleIndex).map((item, index) => (
      <img src={item.url} className="fotogrid-image" alt={item.desc} key={index} />
    ))
  );
  const [secondHalf, setSecondHalf] = useState(
    imgs.slice(middleIndex).map((item, index) => (
      <img src={item.url} className="fotogrid-image" alt={item.desc} key={index + middleIndex} />
    ))
  );

  useEffect(() => {
    const handleResize = () => {
      const isWide = window.innerWidth > 800;
      setIsScreenWide(isWide);
      
      // Wenn der Bildschirm schmaler als 800px ist, kombiniere beide Hälften zu einem
      if (!isWide) {
        setFirstHalf(
          imgs.map((item, index) => (
            <img src={item.url} className="fotogrid-image" alt={item.desc} key={index} />
          ))
        );
      } else {
        setFirstHalf(
          imgs.slice(0, middleIndex).map((item, index) => (
            <img src={item.url} className="fotogrid-image" alt={item.desc} key={index} />
          ))
        );
        setSecondHalf(
          imgs.slice(middleIndex).map((item, index) => (
            <img src={item.url} className="fotogrid-image" alt={item.desc} key={index + middleIndex} />
          ))
        );
      }
    };

    // Event-Listener hinzufügen
    window.addEventListener('resize', handleResize);

    // Bei der ersten Ausführung die Bildschirmgröße prüfen
    handleResize();

    // Cleanup: Event-Listener entfernen, wenn die Komponente unmountet
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [imgs, middleIndex]);

  return (
    <div className="about-fotos-container">
      <div className="about-fotos-container-left">
        {firstHalf}
      </div>
      {isScreenWide && (
        <div className="about-fotos-container-right">
          {secondHalf}
        </div>
      )}
    </div>
  );
}

export default Fotogrid;
