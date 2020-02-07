import React from 'react'
import { connect } from 'react-redux'
import { actions as appActions } from '../../stores/app'
import { getHomeData } from '../../common/logic'
import {Link} from 'react-router-dom'
import { ReactComponent as Laptop11Icon } from './laptop-11.svg'


import './help.scss'

const Icon = props => {
  const { name = 'iconname', width = 200, height = 200 } = props
  if (name.includes('laptop-11')) {
    return <Laptop11Icon {...props} />
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
                  <div className='col-md-12 col-xs-12'>
                    <Item
                    icon = {home.help.values.icon}
                    label ={home.help.values.label}/>
                  </div>
                  <div className='col-md-12 col-xs-12'>
                    <Item
                    icon = {home.help.values.icon}
                    label ={home.help.values.label}/>
                  </div>
                  <div className='col-md-12 col-xs-12'>
                    <Item
                    icon = {home.help.values.icon}
                    label ={home.help.values.label}/>
                  </div>
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

export default connect(mapStateToProps, mapActionsToDispatch)(Help)
