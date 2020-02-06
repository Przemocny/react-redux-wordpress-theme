import React from 'react'
import { connect } from 'react-redux'
import { actions as appActions } from '../../stores/app'
import {getHomeData} from '../../common/logic'
import {Link} from 'react-router-dom'
import { ReactComponent as Browser14Icon } from './browser-14.svg'
import { ReactComponent as Browser26Icon } from './browser-26.svg'
import { ReactComponent as Laptop20Icon } from './laptop-20.svg'
import { ReactComponent as Computer4Icon } from './computer-4.svg'
import './attention2.scss'
 

const Icon = props => {
  const { name = 'computer-4', width = 200, height = 200 } = props
  if (name.includes('browser-14')) {
    return <Browser14Icon {...props} />
  }
  if (name.includes('browser-26')) {
    return <Browser26Icon {...props} />
  }
  if (name.includes('laptop-20')) {
    return <Laptop20Icon {...props} />
  }
  if (name.includes('computer-4')) {
    return <Computer4Icon {...props} />
  }
  return null
}

const Item = ({ label, icon }) => {
  return (
    <div className='item'>
      <div className='item-icon'>
        <Icon name={icon} />
      </div>
      <div className='item-label'>
        <h3>{label}</h3>
      </div>
    </div>
  )
}

const Section1 = ({ home }) => {
  return (
    <div className='container attention-2'>
      <div className='row'>
        <div className='col-md-4'>
          <div className='glyph'>
            <Icon name={'flaticon-computer-4'} />
          </div>
        </div>
        <div className='col-md-8'>
          <h1 className='title-1'>{home.attention2.title}</h1>
        </div>
      </div>
    </div>
  )
}
const Section2 = ({ home }) => {
  return (
    <React.Fragment>
      <div className='attention-3'>
        <div className='container'>
          <div className='items'>
            <div className='row'>
              {home.attention2.values.map((el, k) => {
                return (
                  <div className='col-md-4 col-xs-12' key={k}>
                    <Item {...el} />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      <div className='attention-4'>
        <div className='container'>
          <div className='motto'>
            <h2>{home.attention2.title2.label}</h2>
          </div>
        </div>
        <div className="row justify-content-center pt-5">
              <Link to="/blog" className='attention-button alt'>
              Read about us on blog
              </Link>
      </div>
        <div className='dot'></div>
      </div>
    </React.Fragment>
  )
}
const Attention2 = props => {
  const { pages, lang } = props.app
  if (pages.length !== 0) {
    const [keys, home] = getHomeData(pages, lang)
    return (
      <React.Fragment>
        <Section1 home={home} />
        <Section2 home={home} />
      </React.Fragment>
    )
  }
  return null
}

const mapStateToProps = (state, componentProps) => {
  return { app: state.App }
}

const mapActionsToDispatch = { ...appActions }

export default connect(mapStateToProps, mapActionsToDispatch)(Attention2)
