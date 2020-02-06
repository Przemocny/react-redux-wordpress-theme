import React from 'react'

import { NavLink as Link } from 'react-router-dom'

const goToId = (id)=>{
  setTimeout(()=>{
    document.getElementById(id.replace('#','')).scrollIntoView({
      behavior: 'smooth'
    });
  },66)
}

const SingleMenuItem = ({ elem, noList = false }) => {
  if (noList) {
    return (
      <Link
        exact
        to={{
          pathname: '/',
          hash: elem.url.replace('#',''),
        }}
        title={elem.title}
        onClick={()=>{
          goToId(elem.url)
        }}
      >
        {elem.title} <i className='icofont icofont-rounded-down'></i>
      </Link>
    )
  }

  if (elem.url.includes('##')) {
    return (
      <li>
        <Link exact to={elem.url.replace('##', '/')} title={elem.title}>
          {elem.title}
        </Link>
      </li>
    )
  }

  return (
    <li>
      <Link
      exact
      to={{
        pathname: '/',
        hash: elem.url.replace('#',''),
      }}
      title={elem.title}
      onClick={()=>{
        goToId(elem.url)
      }}
    >
        {elem.title}
        </Link>
    </li>
  )
}

const MenuItem = ({ elem }) => {
  const { child_items } = elem
  if (child_items) {
    return (
      <li>
        <SingleMenuItem elem={elem} noList={true} />
        <ul>
          {child_items.map((el, k) => {
            return <SingleMenuItem elem={el} key={k} />
          })}
        </ul>
      </li>
    )
  }
  return <SingleMenuItem elem={elem} />
}

class Menu extends React.Component {
  state = {
    isMenuOpened: false,
    isMenuSticked:false
  }
  constructor(){
    super()
  }

  componentDidMount(){
      window.addEventListener('scroll',(ev)=>{
        if(window.scrollY !== 0){
          if(!this.state.isMenuSticked){
            this.setState({
              isMenuSticked:true
            })
          }
        }
        else{
          this.setState({
            isMenuSticked:false
          })
        }
      })
  }
  
  render () {
    const { menu } = this.props
    const { isMenuOpened, isMenuSticked } = this.state
    return (
      <React.Fragment>
        <div className={['app-top-menu',isMenuSticked ? 'sticked' : ''].join(' ')}>
          {/* md, lg, xl */}
          <div className='container d-none d-md-block'>
            <div className='row no-pm'>
              <div className='col-md-3 col-xs-6 no-pm'>
                <div className='logo'>
                  <Link exact to={'/'}>
                    <img
                      src={
                        'http://wp.api.localhost-group.com/wp-content/uploads/2020/02/lh-academy-white70.png'
                      }
                    />
                  </Link>
                </div>
              </div>
              <div className='col-md-9 col-xs-6 no-pm'>
                <ul className='app-menu'>
                  {menu.map((el, k) => {
                    return <MenuItem elem={el} key={k} />
                  })}
                </ul>
              </div>
            </div>
          </div>
          {/* xs, sm */}
          <div className='container-fluid d-md-none'>
            <div className='row no-pm justify-content-between'>
              <div className='col-xs-6 no-pm'>
                <div className='logo'>
                  <Link exact to={'/'}>
                    <img
                      src={
                        'http://wp.api.localhost-group.com/wp-content/uploads/2020/02/lh-academy-white70.png'
                      }
                    />
                  </Link>
                </div>
              </div>
              <div className='col-xs-6 no-pm'>
                <div className='toggler'>
                      <a onClick={()=>{
                        this.setState({isMenuOpened:!isMenuOpened})
                      }}>
                      <i className="icofont-navigation-menu"></i>
                      </a>
                </div>
              </div>
              {isMenuOpened && <div className='col-md-12 col-xs-6 no-pm'>
                <ul className='app-menu-mobile'>
                  {menu.map((el, k) => {
                    if (!el.child_items) {
                      return <MenuItem elem={el} key={k} />
                    }
                  })}
                </ul>
              </div>}
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export {goToId}
export default Menu
