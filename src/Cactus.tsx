import { useState, useEffect } from 'react';

export default function Cactus() {
  const [position, setPosition] = useState(1200);

  useEffect(() => {
    const speed = 5;
    const interval = setInterval(() => {
      setPosition(previousPosition => (previousPosition <= -50 ? 1200 : previousPosition - speed))}, 30)
    return () => clearInterval(interval)
  }, [])


  return (
    <div 
    className="absolute bottom-0" 
    style={{ left: `${position}px` }}>
      <img src="src/assets/cactus-idle.png" alt="Cactus" className="w-8"/>
    </div>
  );
}