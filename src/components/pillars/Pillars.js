import React from 'react'
import { connect } from 'react-redux'
import { actions as appActions } from '../../stores/app'
import {getHomeData} from '../../common/logic'

import {ReactComponent as ChipIcon} from './chip.svg'
import './pillars.scss'
 

const PillarItem = ({ title, label }) => {
  return (
    <div className='item'>
      <h3 className='title'>{title}</h3>
      <h4 className='label'>{label}</h4>
    </div>
  )
}

const Pillars = props => {
  const { pages, lang } = props.app
  if (pages.length !== 0) {
    const [keys, home] = getHomeData(pages, lang)
    return (
      <div className='pillars'>
        <div className='container'>
          <div className='title'>{home.pillars.title}</div>
          <div className='pillars-inner'>
            
            <div className='row justify-content-center'>
              <div className='wrapper col-md-6 col-xs-12'>
                <PillarItem
                  title={home.pillars.values[0].title}
                  label={home.pillars.values[0].label}
                />
              </div>
              <div className='wrapper col-md-6 col-xs-12'>
                <PillarItem
                  title={home.pillars.values[1].title}
                  label={home.pillars.values[1].label}
                />
              </div>
              <div className="pillars-icon d-none d-md-block">
            <ChipIcon/>
            </div>
            </div>
            <div className='row justify-content-center'>
              <div className='wrapper col-md-6 col-xs-12'>
                <PillarItem
                  title={home.pillars.values[2].title}
                  label={home.pillars.values[2].label}
                />
              </div>
              <div className='wrapper col-md-6 col-xs-12'>
                <PillarItem
                  title={home.pillars.values[3].title}
                  label={home.pillars.values[3].label}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, componentProps) => {
  return { app: state.App }
}

const mapActionsToDispatch = { ...appActions }

export default connect(mapStateToProps, mapActionsToDispatch)(Pillars)
