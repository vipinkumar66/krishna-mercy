import React from 'react'
import bhagwatam from '../assets/images/bhagwatam.jpg'
import {Link} from 'react-router-dom'

const BooksIntro = () => {
  return (
    <section id="books__intro">
        {/* <div className=' container flex flex-col max-w-7xl space-y-6 justify-center mx-auto text-center '> */}
            <div className='container max-w-7xl flex flex-col space-x-0 md:flex-row md:space-x-6 md:space-y-0 items-center '>
                <div className='flex flex-col w-1/2 space-y-4'>
                    <h1 className='dark:text-slate-200 text-2xl md:text-3xl lg:text-4xl font-bold'>
                    <span className='text-blue-400'>"Divine Illumination: </span> Exploring Prabhupada's Spiritual Literature"</h1>
                    <p className='dark:text-slate-400 text-base italic font-[550]'>
                        If you're serious about growing spiritually, here's the secret: chant 'Hare Krsna' 16 times every day, follow four important principles, and read these books. This isn't just reading—it's a journey. These teachings can change you. So, open these pages, take in the words, and let this be a path to a deeper, brighter, and more peaceful you. Welcome to a journey of spiritual discovery.
                    </p>
                    <Link to=""><button className='bg-gradient-to-r from-violet-500 to-fuchsia-500 px-3 py-1 rounded-lg font-bold text-white'>WISDOM</button></Link>
                </div>
                <div className='w-1/2 items-center'>
                    <img src={bhagwatam} alt="" className='h-[60vh] w-[50vh] m-auto rounded-xl shadow-lg shadow-slate-600' />
                </div>
            </div>

        {/* </div> */}
    </section>
  )
}

export default BooksIntro
