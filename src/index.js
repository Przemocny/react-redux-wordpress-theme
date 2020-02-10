import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import App from './App';
import {WPApi, ACFApi} from './api'
import { reducer as appReducer } from './stores/app';
import { actions } from './stores/app.js'

import './styles/global.scss'
import './styles/components.scss'
import './styles/icofont.min.css'
import './styles/flaticon.css'

const logger = store => next => action => {
  if (action){
    const selectedStore = action.type.split('/')[0]
    console.log('\n\n')
    console.log(`ACTION ${action.type} WITH PAYLOAD`, action.payload)
    let result = next(action)
    console.log(`NEXT STATE OF ${selectedStore}`, store.getState()[selectedStore])
    console.log('\n\n')
    return result
  }
}

const store = configureStore({
    reducer : {
        App: appReducer,
    },
    middleware:[logger]
});

const onInit = (store) => {
  const {loadingInitialData, successInitialData, failedInitialData } = actions
  const {dispatch} = store

  dispatch(loadingInitialData())

  Promise.all([
    WPApi.getPages(),
    WPApi.getPosts(),
    WPApi.getMenu(),
    ACFApi.getPosts()
  ]).then(([pages, posts, {items}, acfPosts])=>{
    // // // work after you fill posts/pages with data in wordpress

    const postsWithAcf = posts.map((e,k)=>{
      e['acf'] = acfPosts[k].acf
      return e
    })

    // dispatch(successInitialData({
    //   pages, posts:postsWithAcf, menu:items
    // }))

    // // // code for empty wordpress
    dispatch(successInitialData({
      pages:pages, posts:postsWithAcf, menu:[]
    }))
  }).catch((err)=>{
    dispatch(failedInitialData(err))
  })
}

onInit(store)


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

export {store}