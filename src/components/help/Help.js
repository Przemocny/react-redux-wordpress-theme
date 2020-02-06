import React from 'react'
import { connect } from 'react-redux'
import { actions as appActions } from '../../stores/app'
import { getHomeData } from '../../common/logic'
import {Link} from 'react-router-dom'
import { ReactComponent as ComputerIcon } from './computer-4.svg'
import { ReactComponent as Laptop11Icon } from './laptop-11.svg'
import { ReactComponent as Browser32Icon } from './browser-32.svg'
import { ReactComponent as Laptop3Icon } from './laptop-3.svg'
import { ReactComponent as Laptop6Icon } from './laptop-6.svg'
import { ReactComponent as Laptop13Icon } from './laptop-13.svg'

import './help.scss'

const Icon = props => {
  const { name = 'computer-4', width = 200, height = 200 } = props
  if (name.includes('laptop-11')) {
    return <Laptop11Icon {...props} />
  }
  if (name.includes('browser-32')) {
    return <Browser32Icon {...props} />
  }
  if (name.includes('laptop-3')) {
    return <Laptop3Icon {...props} />
  }
  if (name.includes('laptop-6')) {
    return <Laptop6Icon {...props} />
  }
  if (name.includes('laptop-13')) {
    return <Laptop13Icon {...props} />
  }
  return null
}

const Item = ({ label, icon }) => {
  return (
    <div className='item'>
      <div className='row'>
        <div className='col-md-2 col-xs-12'>
          <div className='item-icon'>
            <Icon name={icon} />
          </div>
        </div>
        <div className='col'>
          <h4 className='subtitle'>{label}</h4>
        </div>
      </div>
    </div>
  )
}

const Help = props => {
  const { pages, lang } = props.app
  if (pages.length !== 0) {
    const [keys, home] = getHomeData(pages, lang)
    return (
      <div className='help'>
        <div className='container'>
          <h1 className='title'>{home.help.title}</h1>
          <div className='items'>
            <div className='row justify-content-center'>
              {home.help.values.map((el, k) => {
                return (
                  <div className='col-md-12 col-xs-12' key={k}>
                    <Item {...el} />
                  </div>
                )
              })}
            </div>
          </div>
          
        </div>
        <div className='go-to-blog'>
            <div className='row justify-content-center'>
              <Link to="/blog" className='attention-button'>
                Read more about our standards
              </Link>
            </div>
          </div>
      </div>
    )
  }
  return null
}

const mapStateToProps = (state, componentProps) => {
  return { app: state.App }
}

const mapActionsToDispatch = { ...appActions }

export default connect(mapStateToProps, mapActionsToDispatch)(Help)
