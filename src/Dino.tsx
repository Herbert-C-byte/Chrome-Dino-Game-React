import { useState, useEffect, useRef } from 'react';

export default function Dino() {
  const [position, setPosition] = useState(0);
  const [isJumping, setIsJumping] = useState(false);
  const isJumpingRef = useRef(false);
  const velocity = useRef(0);
  const gravity = -1.2;
  const jumpForce = 18;
  const groundLevel = 0;
  const maxHeight = 80;

   useEffect(() => {
    isJumpingRef.current = isJumping;
  }, [isJumping]);
  
  //handling the jump
   useEffect(() => {
    const handleJump = (e: KeyboardEvent) => {
      if (e.code === 'Space' && !isJumpingRef.current) {
        isJumpingRef.current = true;
        setIsJumping(true);
        velocity.current = jumpForce; // instant jump start
      }
    };

    window.addEventListener('keydown', handleJump)
    return () => window.removeEventListener('keydown', handleJump)
  }, [isJumping]);
  
  
  //game loop
  useEffect(() => {
    const gameLoop = setInterval(() => {
      setPosition(previousPosition => {
        let next = previousPosition + velocity.current
        velocity.current += gravity

        if (next <= groundLevel) {
          next = groundLevel;
          velocity.current = 0;
          setIsJumping(false)
        } else if (next >= maxHeight) {
          next = maxHeight;
          velocity.current = gravity;
        }

        return next;
      })
    }, 16)

    return () => clearInterval(gameLoop);
  }, []);

  return (
    <div 
      className="absolute left-10" 
      style={{bottom: `${position}px` }}>
    <img src="src/assets/dino-idle.png" alt="Dino Idle" className='w-12'/>
    </div>
  );
}