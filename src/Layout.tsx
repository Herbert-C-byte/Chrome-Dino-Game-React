import Cactus from './Cactus'
import Dino from './Dino'

export default function Layout() {
  return (
    <>
      <div className="w-96 h-52 bg-slate-400">
        <Dino />
        <Cactus />
      </div>
    </>
  )
}