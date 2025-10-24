import Layout from './Layout'
import Cactus from './Cactus'
import Dino from './Dino'



function App() {

  return (
    <>
    <h1>Hi</h1>
    <div className="location">Hello world</div>
      <Layout>
        <Dino />
        <Cactus />
      </Layout>
    </>
  )
}

export default App
