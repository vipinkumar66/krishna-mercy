import React from 'react'
import Hero from './Hero'

const Home = () => {
  return (
    <section id='hero' className='dark:bg-[#040D12]'>
        <div className='container flex flex-col max-w-7xl p-2 mt-6 mx-auto'>
            <Hero/>
        </div>
    </section>
  )
}

export default Home
