import './App.css'
import Cactus from './Cactus'
import Dino from './Dino'

function App() {

  function isRunning() {
    return true
  }

  return (
    <>
      <Dino />
      <Cactus />
    </>
  )
}

export default App
