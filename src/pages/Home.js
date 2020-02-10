import React from 'react'
import {ContactForm, Attention1, Attention2, Help, Pricing, ReadMe,
      } from '../components'

const getHomeData = pages => {
  const home = pages.filter(e => e.slug == 'home-en')[0]['acf']
  return [Object.keys(home), home]
}

const Home = ({ pages }) => {
  if (pages.length !== 0) {
    const [keys, home] = getHomeData(pages)
    return (
      <div className='anim-view container-fluid no-pm'>
        <ReadMe />
      </div>
    )
  }
  return null
}




export default Home
