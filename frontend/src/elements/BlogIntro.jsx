import React from 'react'
import {Link} from 'react-router-dom'


const BlogIntro = () => {
  return (
    <section id='blog__intro'>
        <div className='flex flex-col space-y-3 max-w-4xl'>
            <h1 className='dark:text-slate-200 text-2xl md:text-3xl lg:text-4xl font-bold'>
                <span className='text-blue-400'>Gems of Spiritual Wisdom:</span> Exploring Prabhupada's Teachings and More
            </h1>
            <p className='dark:text-slate-400 text-base italic font-[550]'>
            Welcome to our blog, a sanctuary of spiritual enlightenment where we delve into the profound teachings of His Divine Grace A.C. Bhaktivedanta Swami Prabhupada and a treasure trove of spiritual classics. Here, we unlock the timeless wisdom contained in Prabhupada's books, guiding you on a journey of self-realization and transcendence.
            <br /><br />
            Join us as we explore the multifaceted gems of spiritual knowledge that illuminate the path to inner peace, purpose, and divine love. Each post is a portal to the boundless realm of spiritual enlightenment, where the wisdom of many books converges to nourish the soul.
            </p>
            <Link to=""><button className='bg-gradient-to-r from-violet-500 to-fuchsia-500 px-3 py-1 rounded-lg font-bold text-white'>WISDOM</button></Link>
        </div>
    </section>
  )
}

export default BlogIntro
