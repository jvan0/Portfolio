import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import githubIcon from '../assets/github.svg'
import linkedinImg from '../assets/linkedin.png'
import twitterImg from '../assets/twitter.png'

const Links = () => {
  return (
    <>
      <a
        href='#contact'
        className='btn rounded-full border-2 border-dark bg-slate-300 py-2 px-2 hover:bg-white'
      >
        <FontAwesomeIcon icon={faPhone} className='-rotate-90 px-1 opacity-80' />
      </a>
      <a
        href='https://github.com/jvan0?tab=repositories'
        target='_blank'
        className='btn rounded-full border-2 border-dark bg-slate-300 py-2 px-2 hover:bg-white'
        rel='noreferrer'
      >
        <img src={githubIcon} alt='GitHub Icon' className='h-auto w-6' />
      </a>
      <a
        href='https://www.linkedin.com/in/juan-cassou-2b1103245/'
        className='btn rounded-full border-2 border-dark bg-slate-300 py-2 px-2 hover:bg-white'
      >
        <img src={linkedinImg} alt='LinkedIn Img' className='h-auto w-6 opacity-80' />
      </a>
      <a
        href='https://www.linkedin.com/in/juan-cassou-2b1103245/'
        className='btn rounded-full border-2 border-dark bg-slate-300 py-2 px-2 hover:bg-white'
      >
        <img src={twitterImg} alt='Twitter Img' className='h-auto w-6 opacity-80' />
      </a>
    </>
  )
}

export default Links
