"use client"
import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti/';

const ConfettiEffect: React.FC<{ active: boolean}> = ({ active }) => {
  const [width, setWidth] = useState<number>(0)
  const [height, setHeight] = useState<number>(0)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true);

    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    if (isClient) {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (isClient) {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, [isClient]);
  
  return active ? <Confetti width={width} height={height} wind={0.01} recycle={false} numberOfPieces={700} /> : null
}

export default ConfettiEffect;