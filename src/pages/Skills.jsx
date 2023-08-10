import reactLogo from '../assets/react-icon.png'
import tailwindLogo from '../assets/Tailwind_CSS_Logo.svg.png'
import javaScriptLogo from '../assets/JavaScript-logo.png'
/* FADE IN PARA IR MOSTRANDO ELEMENTOS */
const Skills = () => {
  return (
    <div className='bg-slate-400 px-10 pt-10 pb-10'>
      <div className='grid-col-1 grid gap-4 md:grid-cols-2'>
        <div className='text-center lg:px-28'>
          <h3 className='bg-gradient-to-r from-purple-500 to-pink-800 bg-clip-text pb-2 text-3xl text-transparent'>
            About Me
          </h3>
          <p className=' font-medium'>
            Hola! Soy Juan Cassou me encuentro estudiando Ingenieria en Sistemas de Informacion en
            la Ciudad de Cordoba. <br /> Mi enfoque abarca el front-end, diseño de interfaces y
            programación, comprometido con el aprendizaje continuo para abordar desafíos
            tecnológicos con creatividad y precisión.
          </p>
        </div>
        <div className='pt-2 text-center md:pt-10'>
          <p className='text-center font-medium md:px-2 lg:px-20'>
            Las herramientas con las que he trabajado en mis proyectos son las siguientes:
          </p>
          <div className='flex items-center justify-center gap-10 pt-6'>
            <img
              src={reactLogo}
              alt='React'
              className='h-16 w-auto duration-700 ease-out hover:scale-150 hover:duration-700 hover:ease-out'
            />
            <img
              src={tailwindLogo}
              alt='Tailwind'
              className='h-16 w-auto duration-700 ease-out hover:scale-150 hover:duration-700 hover:ease-out'
            />
            <img
              src={javaScriptLogo}
              alt='JavaScript'
              className='h-16 w-auto duration-700 ease-out hover:scale-150 hover:duration-700 hover:ease-out'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
