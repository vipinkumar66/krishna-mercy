import React, {createContext, useContext} from 'react'

export const BlogsListContext = createContext()

export function BlogsList({children}){

    const [allBlogs, setAllBlogs] = React.useState(null);

    const setAllBlogsValue = (blogsList) =>{
        setAllBlogs(blogsList)
    }

  return (
    <BlogsListContext.Provider value={{allBlogs, setAllBlogs:setAllBlogsValue}}>
      {children}
    </BlogsListContext.Provider>
  )
}

    export function useBlogList() {
        return useContext(BlogsListContext)
    }

export default BlogsList;
