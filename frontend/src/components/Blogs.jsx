import React, {useContext} from 'react'
import krishna from '../assets/images/krishna.png'
import UseCrud from '../hooks/UseCrud'
import { BlogsListContext } from '../context/BlogsList'

const Blogs = () => {
    const { setAllBlogs, allBlogs }  = useContext(BlogsListContext);
    const {fetchData, dataCRUD, error, isLoading } = UseCrud('/blogs/');

    React.useEffect(()=>{
        if (dataCRUD){
            setAllBlogs(dataCRUD)
        }else{
            console.log("There is no data")
        }
    },[dataCRUD])

    React.useEffect(()=> {
        fetchData();
    }, [])

  return (
    <section id="blogs__page">
        <div className='container flex flex-col max-w-7xl mx-auto mt-2 p-2'>
            <div className='items-center text-center mx-auto mt-6'>
                <h1 className='md:text-5xl text-2xl dark:text-slate-200 font-extrabold'>Prabhupada's Teachings</h1>
                <p className='dark:text-slate-400 p-6 md:p-12 lg:p-16 text-base font-semibold'>
                Welcome to our sacred corner of the internet—a portal to a world of profound spiritual enlightenment. At our blog, we invite you to embark on a transformative journey, delving deep into the profound teachings of the revered His Divine Grace A.C. Bhaktivedanta Swami Prabhupada and a treasury of timeless spiritual classics. <br /><br />

                Within these digital pages, we unlock the boundless wisdom concealed in Prabhupada's literary legacy, offering you a guiding light on your quest for self-realization and transcendence. As you navigate through our posts, you'll encounter multifaceted gems of spiritual knowledge, each illuminating the path to inner peace, profound purpose, and a profound connection with divine love. <br /><br />

                Our mission is to serve as your spiritual compass, providing you with invaluable insights, and nurturing your soul with the wisdom that converges from countless books and scriptures. Whether you're a seeker of truth or a devoted spiritual traveler, every click brings you closer to a realm of timeless enlightenment. <br /><br />
                </p>
            </div>
            <div className='flex flex-wrap space-x-6 justify-center items-center'>
                {allBlogs && allBlogs.map((blogs,index) => (
                    <div className='flex md:basis-[45%]  dark:bg-slate-900 bg-slate-100  rounded-lg mb-10' key={index}>
                    <div className='hidden md:block flex-none w-48 relative'>
                        <img src={blogs.image} alt="" className='absolute inset-0 w-full h-full object-cover rounded-l-lg'/>
                    </div>
                    <div className='flex flex-col space-y-3 p-6 ml-2 w-full' key={index}>
                        <h1 className='text-2xl font-bold dark:text-slate-200  p-1 mb-2'>{blogs.title}</h1>
                        {/* <p className='text-base font-bold dark:text-slate-400'>And here we are going to have some content related to the topic</p> */}
                        <p className='text-sm text-blue-500 font-semibold'>{blogs.created_at}</p>
                        <button className=' dark:bg-blue-700 bg-slate-500 text-slate-50 font-mono w-1/3
                        rounded-lg cursor-pointer hover:bg-blue-950 p-1 font-bold'>Read</button>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Blogs
