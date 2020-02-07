import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { actions as appActions } from '../../stores/app'
import { getHomeData } from '../../common/logic'
import './attention1.scss'
import { goToId } from '../Menu'

const Attention1 = props => {
  const { pages, lang } = props.app
  if (pages.length !== 0) {
    const [keys, home] = getHomeData(pages, lang)
    return (
      <div
        className='attention'
        id='home'
        style={{ backgroundImage: `url(${home.attention1.image})` }}
      >
        <div className='bg'></div>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-md-8 col-xs-12'>
              <h1 className='title'>{home.attention1.title1}</h1>
              <h2 className='title2'>{home.attention1.title2}</h2>
            </div>
          </div>
          <div className='row  justify-content-center'>
            <div className='col-lg-4 col-sm-12'>
              <Link
                to={{
                  pathname: '/',
                  hash: '#testimonials',
                }}
                title={home.attention1.button1}
                onClick={() => {
                  goToId('#testimonials')
                }}
                className='attention-button'
              >
                {home.attention1.button1}
              </Link>
            </div>
            <div className='col-lg-4 col-sm-12'>
            <Link
            to={{
              pathname: '/',
              hash: '#contact',
            }}
            title={home.attention1.button2}
            onClick={() => {
              goToId('#contact')
            }}
            className='attention-button alt'
          >
            {home.attention1.button2}
          </Link>
            </div>
          </div>
        </div>

        <div className='dot'></div>
      </div>
    )
  }
  return null
}

const mapStateToProps = (state, componentProps) => {
  return { app: state.App }
}

const mapActionsToDispatch = { ...appActions }

export default connect(mapStateToProps, mapActionsToDispatch)(Attention1)
