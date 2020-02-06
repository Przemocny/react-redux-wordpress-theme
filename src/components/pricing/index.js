import React from 'react'
import { Link } from 'react-router-dom'
import { goToId } from '../Menu'
import { connect } from 'react-redux'
import { actions as appActions } from '../../stores/app'
import { getHomeData } from '../../common/logic'

import './pricing.scss'

const PricingItem = ({
  title,
  title2,
  curencyunit,
  price,
  forWho,
  values,
  color,
}) => {
  return (
    <div
      className='item'
      style={{
        backgroundColor: `${color}`,
      }}
    >
      <h3 className='title1'>{title}</h3>
      <h4 className='title2'>{title2}</h4>
      <h3 className='price'>
        {price} <small>{curencyunit}</small>
      </h3>
      <h4 className='title2 description'>{forWho}</h4>
      {values.map((el, k) => {
        return (
          <p className='value' key={k}>
            {el.label}
          </p>
        )
      })}
      <Link
        to={{
          pathname: '/',
          hash: '#contact',
        }}
        title={'Contact with mentor'}
        onClick={() => {
          goToId('#contact')
        }}
        className='pricing-button alt'
      >
        Contact with mentor
      </Link>
    </div>
  )
}

const Pricing = props => {
  const { pages, lang } = props.app
  if (pages.length !== 0) {
    const [keys, home] = getHomeData(pages, lang)
    return (
      <div className='pricing'>
        <div className='container'>
          <h3 className='title'>{home.pricing.title}</h3>
          <div className='pricing-inner'>
            <div className='row justify-content-center'>
              {home.pricing['pricing-item'].map((el, k) => {
                return (
                  <div className='wrapper col-lg-4 col-md-12 col-xs-12' key={k}>
                    <PricingItem
                      title={el.title}
                      title2={el.title2}
                      price={el.price}
                      curencyunit={el.currencyunit}
                      forWho={el.for}
                      values={el['pricing-values']}
                    />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    )
    return null
  }
}

const mapStateToProps = (state, componentProps) => {
  return { app: state.App }
}

const mapActionsToDispatch = { ...appActions }

export default connect(mapStateToProps, mapActionsToDispatch)(Pricing)
