import React from 'react'
import { connect } from 'react-redux'
import { actions as appActions } from '../../stores/app'
import { getHomeData } from '../../common/logic'
import './post.scss'

const listCreator = (content, listMark='--')=>{
  if(content.includes(listMark)){
    const [empty,...list] = content.split(listMark)
    return list.map((el,k)=>{
      return (<p>- {el}</p>)
    })
  }
  else{
    return content
  }
}

const Section = ({ title, image, content }) => {
  if (image) {
    return (
      <div className='col-md-8 col-xs-12'>
        <div className='section'>
          <div>
            <img src={image} />
          </div>
        </div>
      </div>
    )
  }

  const _c = listCreator(content)
  return (
    <div className='col-md-8 col-xs-12'>
      <div className='section'>
        {title && <h4>{title}</h4>}
        <div>
          <p>{_c && _c}</p>
        </div>
      </div>
    </div>
  )
}

const SinglePost = props => {
  const { acf } = props.post

  return (
    <div className='post' style={{ backgroundImage: `url(${acf.image})` }}>
      <div className='bg'></div>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-8 col-xs-12'>
            <h1 className='title'>{acf.title}</h1>
            <h2 className='title2'>{acf.subtitle}</h2>
          </div>
        </div>
        <div className='dot'></div>
      </div>
    </div>
  )
}

const mapStateToProps = (state, componentProps) => {
  return { app: state.App }
}

const mapActionsToDispatch = { ...appActions }

export default connect(mapStateToProps, mapActionsToDispatch)(SinglePost)
export { Section }
