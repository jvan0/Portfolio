import Home from './components/Home'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='mx-auto w-full'>
      <div className='App bg-hero bg-contain bg-center bg-no-repeat bg-cover bg-darky bg-40'>
        <Navbar />
        <Home />
      </div>
    </div>
  )
}
export default App