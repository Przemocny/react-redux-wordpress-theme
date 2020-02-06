import React from 'react'
import { connect } from 'react-redux'
import { actions as appActions } from '../../stores/app'
import {getHomeData} from '../../common/logic'
 
import './about.scss'

const Item = ({title, label}) => {
    return (
        <div className="item">
            <h3 className="title">{title}</h3>
            <h4 className="subtitle">{label}</h4>
        </div>
    )
}

const About = props => {
  const { pages, lang } = props.app
  if (pages.length !== 0) {
    const [keys, home] = getHomeData(pages, lang)
    return (
      <div
        className='about'
        style={{ backgroundImage: `url(${home.about.bgimage}.webp)` }}
      >
        <div className='bg'></div>
        <div className="container">
            <div className="row">
                <div className="col-md-3 col-xs-12">
                    <Item 
                    title={home.about.values[0].title}
                    label={home.about.values[0].label} />
                </div>
                <div className="col-md-3 col-xs-12">
                    <Item 
                    title={home.about.values[1].title}
                    label={home.about.values[1].label} />
                </div>
                <div className="col-md-3 col-xs-12">
                    <Item 
                    title={home.about.values[2].title}
                    label={home.about.values[2].label} />
                </div>
                <div className="col-md-3 col-xs-12">
                    <Item 
                    title={home.about.values[3].title}
                    label={home.about.values[3].label} />
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

export default connect(mapStateToProps, mapActionsToDispatch)(About)
