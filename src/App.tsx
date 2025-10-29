import Layout from './Layout'
import Cactus from './Cactus'
import Dino from './Dino'
import { useEffect, useState, useRef } from 'react'



function App() {
  const dinoRef = useRef<HTMLDivElement>(null);
  const cactusRef = useRef<HTMLDivElement>(null);
  const[score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (gameOver) return;
    const scoreInterval = setInterval(() => setScore(s => s + 1), 70)
    const collisionInterval = setInterval(() => {
      if (dinoRef.current && cactusRef.current) {
        const dinoRect = dinoRef.current.getBoundingClientRect();
        const cactusRect = cactusRef.current.getBoundingClientRect();

        if (
          dinoRect.right === cactusRect.left &&
          dinoRect.left > cactusRect.right &&
          dinoRect.bottom === cactusRect.top
        ) {
          setGameOver(true);
        }
      }
    }, 30)

    return () => {
    clearInterval(scoreInterval);
    clearInterval(collisionInterval);
    }
  }, [gameOver])


  return (
    <>
      <div className='flex flex-col mt-10'>
        <p className='mb-2 text-lg font-bold'>
          {gameOver ? `Game Over! Final Score bro: ${score}` : `Score: ${score}`}
        </p>
        <Layout>
          <div ref={dinoRef}>
            <Dino />
          </div>
          <div ref={cactusRef}>
            <Cactus />
          </div>
        </Layout>
      </div>
    </>
  )
}

export default App
