import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import githubIcon from '../assets/github.svg'
import linkedinImg from '../assets/linkedin.png'
import twitterImg from '../assets/twitter.png'

const Home = () => {
  return (
    <div className='flex justify-center items-center' id='home' >
      <div className='flex justify-center flex-col gap-10 h-screen'>
        <h3 className='md:text-4xl text-3xl font-roboto-slab font-extrabold text-[#ecf1f8]'>
        Soy <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 hover:text-5xl duration-300'>Juan Cassou. </span> <br/> Frontend Developer.
        </h3>
        <div className='flex justify-center items-center gap-5'>
          <a href="#contact" 
            className="btn bg-slate-300 rounded-full border-2 border-dark py-2 px-2 hover:bg-white">
            <FontAwesomeIcon icon={faPhone} className="-rotate-90 px-1 opacity-80" />
          </a>
          <a href='https://github.com/jvan0?tab=repositories' target='_blank'
            className="btn bg-slate-300 rounded-full border-2 border-dark py-2 px-2 hover:bg-white"> 
            <img src={githubIcon} alt='GitHub Icon' className='w-6 h-auto'/>
          </a>
          <a href="https://www.linkedin.com/in/juan-cassou-2b1103245/"
            className='btn bg-slate-300 rounded-full border-2 border-dark py-2 px-2 hover:bg-white'>
            <img src={linkedinImg} alt='LinkedIn Img' className='w-6 h-auto opacity-80'/>
          </a>
          <a href="https://www.linkedin.com/in/juan-cassou-2b1103245/"
            className='btn bg-slate-300 rounded-full border-2 border-dark py-2 px-2 hover:bg-white'>
            <img src={twitterImg} alt='Twitter Img' className='w-6 h-auto opacity-80'/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home