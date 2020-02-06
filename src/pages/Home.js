import React from 'react'
import {ContactForm, Attention1, Help, Pricing, 
      } from '../components'

const getHomeData = pages => {
  const home = pages.filter(e => e.slug == 'home')[0]['acf']
  return [Object.keys(home), home]
}

const Home = ({ pages }) => {
  if (pages.length !== 0) {
    const [keys, home] = getHomeData(pages)
    return (
      <div className='anim-view container-fluid no-pm'>
        <Attention1 />
        <Help />
        <Pricing />
        <ContactForm />
      </div>
    )
  }
  return null
}
export default Home
