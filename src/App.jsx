import Home from './pages/Home'
import Navbar from './pages/Navbar'
import Skills from './pages/Skills'

const App = () => {
  return (
    <div className='mx-auto w-full bg-dark'>
      <div className='App bg-darky bg-40 bg-hero bg-cover bg-center bg-no-repeat'>
        <Navbar />
        <Home />
      </div>
      <Skills />
    </div>
  )
}
export default App
