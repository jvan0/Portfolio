import Links from '../components/Links'
import githubIcon from '../assets/github-logo-w.svg'
const Footer = () => {
  return (
    <div className='flex items-center justify-between px-10 pt-3 pb-5 '>
      <div target='_blank' className='text-sm hover:border-b-2 hover:border-white'>
        <a
          target='_blank'
          href='https://github.com/jvan0/Portfolio'
          className='flex items-center gap-2 text-white'
          rel='noreferrer'
        >
          <img src={githubIcon} alt='GitHub Icon' className='cursor h-auto w-4 ' />
          Portfolio code
        </a>
      </div>
      <div className='flex translate-x-4 scale-75 gap-4 md:translate-x-0 md:scale-90 lg:scale-100 lg:gap-2'>
        <Links className='' />
      </div>
    </div>
  )
}

export default Footer
