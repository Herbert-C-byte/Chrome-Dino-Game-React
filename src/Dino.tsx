import { useState, useEffect, useRef } from 'react';

export default function Dino() {
  const [position, setPosition] = useState(0);
  const [isJumping, setIsJumping] = useState(false);
  const velocity = useRef(0);
  const gravity = 1;
  const jumpforce = 15;
  const groundLevel = 0;
  const maxHeight = 80;

  useEffect(() => {
    const handleJump = (e: KeyboardEvent) => {
      if (e.code === 'Space' && !isJumping) {
        setIsJumping(true);
        velocity.current =  jumpforce;
      }
    }

    window.addEventListener('keydown', handleJump)
    return () => window.removeEventListener('keydown', handleJump)
  }, [isJumping]);

  return (
    <div 
      className="absolute left-10" 
      style={{bottom: `${position}px` }}>
    <img src="src/assets/dino-idle.png" alt="Dino Idle" className='w-12'/>
    </div>
  );
}