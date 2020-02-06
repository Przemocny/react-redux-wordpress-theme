import React from 'react'
import { NavLink as Link } from 'react-router-dom'
import './blog.scss'

const PostBlock = ({ elem }) => {
    const link = {
      pathname: `/blog/${elem.slug}`,
    }
    return (
      <div className='blog-post'>
        <Link to={link}>
          <div className='row justify-content-center'>
            <div className='col-md-3 col-xs-12'>
              <img src={elem.acf.image} />
            </div>
            <div className='col-md-9 col-xs-12'>
              <div className='blog-content'>
                <h4>{elem.acf.title}</h4>
                <h6>{elem.acf.subtitle}</h6>
                <p className="read-more">
                    read more
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    )
  }

const BlogIntro = () => {
  return (
    <div
      className='blog'
      style={{
        backgroundImage: `url(${'https://wp.api.localhost-group.com/wp-content/uploads/2020/01/attention-1_image.png'})`,
      }}
    >
      <div className='bg'></div>
      <div className='content'>
        <h1 className='title'>BLOG</h1>
        <h3 className='title2'>
          Read about Academy, mentors, our methods, and some interesting
          tech-stuff
        </h3>
      </div>
      <div className='dot'></div>
    </div>
  )
}
export {PostBlock}
export default BlogIntro
