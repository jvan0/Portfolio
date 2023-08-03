import { useState, useEffect } from 'react'
const Navbar = () => {
  const navbarMenu = [
    {
      name: 'Home',
      link: '#'
    },
    {
      name: 'Skills',
      link: '#skills'
    },
    {
      name: 'Proyects',
      link: '#proyects'
    },
    {
      name: 'Contact',
      link: '#contact'
    }
  ]
  const [color, setColor] = useState(false)

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
    <div className={color
      ? 'bg-darkest flex sticky top-0 items-center justify-between px-10 py-6 ease-in duration-500'
      : 'bg-transparent flex sticky top-0 items-center justify-between px-10 py-6 ease-in duration-500'}>
      <div className="flex gap-x-20 justify-between">
        <a href="/" className='flex items-center gap-x-4'>
          <span className='font-roboto-slab text-white text-2xl font-extrabold'>{'</>'}</span>
          <span className='font-roboto text-white font-semibold lg:text-base xl:text-xl'> Juan Cassou</span>
        </a>
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
