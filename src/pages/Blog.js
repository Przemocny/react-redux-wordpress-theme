import React, {useEffect} from 'react'
import { ContactForm, BlogIntro, PostBlock } from '../components'


const Blog = ({ posts }) => {

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])

  if (posts.length === 0) {
    return 'empty'
  }
  return (
    <div className='anim-view container-fluid no-pm'>
      <BlogIntro />
      <div className='container'>
        <div className='blog-list'>
          {posts.map((elem, k) => {
            return (
              <div key={k}>
                <PostBlock elem={elem} />
              </div>
            )
          })}
        </div>
      </div>
      <div className="container-fluid no-pm">
      <ContactForm />
      </div>
      
    </div>
  )
}
export default Blog
