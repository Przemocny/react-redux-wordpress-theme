import React from 'react'
import { connect } from 'react-redux'
import { actions as appActions } from '../../stores/app'
import { getHomeData } from '../../common/logic'

import './footer.scss'

const Footer = props => {
  const { pages, lang } = props.app
  if (pages.length !== 0) {
    const [keys, home] = getHomeData(pages, lang)
    return (
      <div>
        <div className='footer-2'>
          <div className='container'></div>
        </div>
        <div className='footer'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6 col-xs-12'>
                <h4 className='title'>YOUR COMPANY</h4>
                <h5 className='adress'>
                  is part of COMAPNY NAME
                </h5>
                <h5 className='adress'>Grove Street</h5>
                <h5 className='adress'>Polska, 00-503 Warszawa</h5>
              </div>
              <div className='col-md-6 col-xs-12'>
                <h5 className='title'>
                  <a href='tel:+48535000959'>(+48) 500 000 900</a>
                </h5>
                <h5 className='title'>
                  <a href='mailto:contact@localhost-group.com'>
                    company@name.com
                  </a>
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className='footer-author'>
          <div className='container'>
             <h6><a href="https://biuroreklama.pl/" target="_blank">Designed by biuro_reklama</a></h6>
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

export default connect(mapStateToProps, mapActionsToDispatch)(Footer)
