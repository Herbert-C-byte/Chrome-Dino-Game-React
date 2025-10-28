import { useState, useEffect, useRef } from 'react';

export default function Dino() {
  const [position, setPosition] = useState(0);
  const [isJumping, setIsJumping] = useState(false);
  const positionRef = useRef(0);
  const velocity = useRef(0);
  const isJumpingRef = useRef(false);
  const gravity = -1.2;
  const jumpForce = 14;
  const groundLevel = 0;
  

  // keep refs in sync with state (just to read current values from RAF)
  useEffect(() => { positionRef.current = position; }, [position]);
  useEffect(() => { isJumpingRef.current = isJumping; }, [isJumping]);

  
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
  
  
  useEffect(() => {
    let rafID = 0;

    const step = () => {
      const next = positionRef.current + velocity.current;
      velocity.current += gravity;

      if (next <= groundLevel) {
        positionRef.current = groundLevel;
        velocity.current = 0;
        if (isJumpingRef.current) {
          isJumpingRef.current = false;
          setIsJumping(false);
        }
        setPosition(groundLevel);
      } else {
        positionRef.current = next;
        setPosition(next);
      }

      rafID = requestAnimationFrame(step);
    };

    rafID = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafID);
  }, []);

  return (
    <div
      className="absolute left-10"
      style={{ bottom: `${position}px` }}>
    <img src="src/assets/dino-idle.png" alt="Dino Idle" className='w-12'/>
    </div>
  );
}