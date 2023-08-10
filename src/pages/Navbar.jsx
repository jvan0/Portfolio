import { useState, useEffect } from 'react'
import { Squash as Hamburger } from 'hamburger-react'
const Navbar = () => {
  const navbarMenu = [
    {
      name: 'Home',
      link: '#',
    },
    {
      name: 'About Me',
      link: '#skills',
    },
    {
      name: 'Proyects',
      link: '#proyects',
    },
    {
      name: 'Contact',
      link: '#contact',
    },
  ]
  const [color, setColor] = useState(false)
  const [isOpen, setOpen] = useState(false)

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor(true)
      } else {
        setColor(false)
      }
    }
    window.addEventListener('scroll', changeColor)
  }, [])

  return (
    <div
      className={
        color
          ? 'sticky top-0 flex items-center justify-between bg-darkest px-10 py-6 duration-500 ease-in'
          : 'sticky top-0 flex items-center justify-between bg-transparent px-10 py-6 duration-500 ease-in'
      }
    >
      <div className='flex justify-between gap-x-20'>
        <a href='/' className='flex items-center gap-x-4'>
          <span className='font-roboto-slab text-2xl font-extrabold text-slate-300 hover:text-white'>
            {'</>'}
          </span>
          <span className='font-roboto font-semibold text-slate-300 hover:text-white lg:text-base xl:text-xl'>
            {' '}
            Juan Cassou
          </span>
        </a>
      </div>
      <div className='lg:hidden'>
        <Hamburger toggled={isOpen} toggle={setOpen} color='#fff' easing='ease-in' rounded />
      </div>
      <div className='items-center gap-x-12 font-roboto font-semibold text-white/80 lg:flex lg:hidden lg:text-base xl:text-xl'>
        {navbarMenu.map((menu, i) => (
          <a href={menu.link} key={i} className='hover:text-white'>
            {menu.name}
          </a>
        ))}
      </div>
      <div className='hidden items-center gap-x-12 font-roboto font-semibold text-white/80 lg:flex lg:text-base xl:text-xl'>
        {navbarMenu.map((menu, i) => (
          <a href={menu.link} key={i} className='hover:text-white'>
            {menu.name}
          </a>
        ))}
      </div>
    </div>
  )
}

export default Navbar
