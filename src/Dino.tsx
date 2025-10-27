import { useState, useEffect, use } from 'react';

export default function Dino() {
  const [position, setPosition] = useState(0);
  const [isJumping, setIsJumping] = useState(false);

  useEffect(() => {
    
    
  }, []);

  return (
    <div className="dino">
    <img src="src/assets/dino-idle.png" alt="Dino Idle" />
    </div>
  );
}