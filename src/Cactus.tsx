import { useState, useEffect } from 'react';

export default function Cactus() {
  const [position, setPosition] = useState(500);

  return (
    <div className="cactus">
     <img src="src/assets/cactus-idle.png" alt="Cactus" />
    </div>
  );
}