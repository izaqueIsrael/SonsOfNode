import { useState, useRef } from 'react';
import Image from 'next/image';

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const carouselRef = useRef(null);

  const items = [
    { image: '/image1.jpg', text: 'Texto 1' },
    { image: '/image2.jpg', text: 'Texto 2' },
    { image: '/image3.jpg', text: 'Texto 3' },
  ];

  useEffect(() => {
    const timer = setTimeout(handleNext, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [index]);

  const handlePrev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const handleDragStart = (e) => {
    setStartX(e.clientX);
  };

  const handleDragEnd = (e) => {
    const difference = startX - e.clientX;
    if (difference > 50) handleNext();
    if (difference < -50) handlePrev();
  };

  return (
    <div
      ref={carouselRef}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      style={{ cursor: 'grab' }}
    >
      <button onClick={handlePrev}>Anterior</button>
      <div>
        <Image
          src={items[index].image}
          alt={items[index].text}
          width={300}
          height={200}
        />
        <p>{items[index].text}</p>
      </div>
      <button onClick={handleNext}>Próximo</button>
    </div>
  );
}
