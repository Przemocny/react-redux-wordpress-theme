import React from 'react';
import {connect} from 'react-redux';
import {HashRouter as Router, Route} from 'react-router-dom';
import {Layout, Loader} from './components'
import {Home, Blog, Post} from './pages'
import {actions} from './stores/app.js'


class App extends React.Component {
  render () {
    if(this.props.app.imBusy){
      return (
        <Loader/>
      )
    }
    return (
      <Router>
        <Layout menu={this.props.app.menu}>
          <Route exact path="/">
            <Home pages={this.props.app.pages}/>
          </Route>
          <Route exact path="/blog">
            <Blog posts={this.props.app.posts}/>
          </Route>
          <Route exact path="/blog/:slug">
            <Post posts={this.props.app.posts}/>
        </Route>
          
        </Layout>
      </Router>
    );
  }
}

const mapStateToProps = (state, componentProps) => {
	return { app: state.App }
}

const mapActionsToDispatch = {...actions}

export default connect(mapStateToProps, mapActionsToDispatch)(App)
