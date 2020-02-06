import React from 'react'
import { connect } from 'react-redux'
import { actions as appActions } from '../../stores/app'
import {getHomeData} from '../../common/logic'

import { ReactComponent as Browser32Icon } from './browser-32.svg'
import { ReactComponent as Computer4Icon } from './computer-4.svg'
import { ReactComponent as Laptop2Icon } from './laptop-2.svg'
import './why.scss'

const Icon = props => {
  const { name = 'browser-32', width = 200, height = 200 } = props
  if (name.includes('browser-32')) {
    return <Browser32Icon {...props} />
  }
  if (name.includes('computer-4')) {
    return <Computer4Icon {...props} />
  }
  if (name.includes('laptop-2')) {
    return <Laptop2Icon {...props} />
  }
  return null
}

const Item = ({ label, icon, title }) => {
  return (
    <div className='item'>
      <div className='glyph'>
        <Icon name={icon} />
      </div>
      <h3 className='title'>{title}</h3>
      <h4 className='subtitle'>{label}</h4>
    </div>
  )
}

const Why = props => {
  const { pages, lang } = props.app
  if (pages.length !== 0) {
    const [keys, home] = getHomeData(pages, lang)
    return (
      <div className='whyus'>
        <div className='container'>
          <div className='title'>{home.whyus.title}</div>
          <div className='items'>
            <div className='row'>
              {home.whyus.values.map((el, k) => {
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
    )
  }
  return null
}

const mapStateToProps = (state, componentProps) => {
  return { app: state.App }
}

const mapActionsToDispatch = { ...appActions }

export default connect(mapStateToProps, mapActionsToDispatch)(Why)
