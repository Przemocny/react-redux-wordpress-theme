import React, {useEffect} from 'react'
import { useParams, Redirect, Link } from 'react-router-dom'
import { ContactForm, Post, Section } from '../components'

const getPostBySlug = (posts, slug) => {
  return posts.filter(el => el.slug === slug)[0]
}

const PostPage = ({ posts }) => {
  let { slug } = useParams()
  const singlePost = getPostBySlug(posts, slug)

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])


  if (singlePost) {
    return (
      <div className='anim-view container-fluid no-pm'>
        <Post post={singlePost} />

        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-md-8 col-xs-12'>
              <div className='breadcrumbs'>
                <h6>
                  <Link to={'/'}>
                    <i className='icofont icofont-home'></i>
                  </Link>{' / '}
                  <Link to={'/blog'}>
                    Blog
                  </Link>{' / '}
                  {singlePost.acf.title}
                </h6>
              </div>
            </div>
          </div>
          <div className='sections'>
            <div className='row justify-content-center'>
              {singlePost.acf.sections &&
                singlePost.acf.sections.map((el, k) => {
                  return <Section {...el} key={k} />
                })}
            </div>
          </div>
        </div>
        <div className="container-fluid no-pm">
      <ContactForm />
      </div>
      
      </div>
    )
  }

  return <Redirect to='/blog' />
}
export default PostPage
