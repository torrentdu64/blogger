import React,{ useReducer } from 'react';


const BlogContext = React.createContext();

export const BlogProvider = ({children}) => {

  // const blogPosts = [
  // { title: 'blog post 1'},
  // { title: 'blog post 2'},
  // { title: 'blog post 3'},
  // { title: 'blog post 4'},
  // ];
  const blogReducer = (state, action) =>{
      switch(action.type){
        case 'add_blogPost':
        return [...state, {title: `blog post ${state.length + 1}`}];
        default:
          return state;
      }

  };

  const addBlogPost = () => {
    dispatch({ type: 'add_blogPost'});
  };

  const [ blogPosts , dispatch ] = useReducer(blogReducer, []);

  // const addBlogPost = () => {
  //   setBlogPosts([...blogPosts, {title: `blog post ${blogPosts.length + 1}`}])
  // }
  // value={{data: blogPosts, addBlogPost}}

  return <BlogContext.Provider value={{data: blogPosts, addBlogPost}} >
    {children}
  </BlogContext.Provider>
}

export default BlogContext;
