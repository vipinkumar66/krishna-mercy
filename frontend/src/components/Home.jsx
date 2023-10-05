import React from 'react'
import Hero from './Hero'
import BlogIntro from '../elements/BlogIntro'
import BooksIntro from '../elements/BooksIntro'

const Home = () => {

  return (
    <section id='hero' className='dark:bg-[#040D12]'>
        <div className='container flex flex-col max-w-7xl p-2 mt-6 mx-auto space-y-20 md:space-y-32 justify-between'>
            <Hero/>
            <BlogIntro/>
            <BooksIntro/>
        </div>
    </section>
  )
}

export default Home
