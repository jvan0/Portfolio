import Links from '../components/Links'

const Home = () => {
  return (
    <div className='flex items-center justify-center' id='home'>
      <div className='flex h-screen flex-col justify-center gap-10'>
        <h3 className='font-roboto-slab text-3xl font-extrabold text-[#ecf1f8] md:text-4xl'>
          Soy{' '}
          <span className='bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent duration-300 hover:text-5xl'>
            Juan Cassou.{' '}
          </span>{' '}
          <br /> Frontend Developer.
        </h3>
        <div className='flex items-center justify-center gap-5'>
          <Links />
        </div>
      </div>
    </div>
  )
}

export default Home
