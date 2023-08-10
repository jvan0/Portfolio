import Footer from './pages/Footer'
import Home from './pages/Home'
import Navbar from './pages/Navbar'
import Proyects from './pages/Proyects'
import Skills from './pages/Skills'

const App = () => {
  return (
    <div className='mx-auto w-full bg-darkest'>
      <div className='App bg-darky bg-40 bg-hero bg-cover bg-center bg-no-repeat'>
        <Navbar />
        <Home />
      </div>
      <Skills />
      <Proyects />
      <Footer />
    </div>
  )
}
export default App
