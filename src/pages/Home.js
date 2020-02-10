import React, {useEffect}from 'react'
import {ReadMe} from '../components'
import {getPageData} from '../common/logic'

class Home extends React.Component {
  state = {
    page:{},
  }
  componentWillMount(){
    const {pages, slug=""} = this.props
    const page = getPageData(pages, slug)
    this.setState({ page })
  }
  render(){
    const {page} = this.state
    return <div className='anim-view container-fluid no-pm'>
      {/*JSON.stringify(page)*/}
      <ReadMe />
  </div>
  }
}

export default Home
