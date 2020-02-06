import { createSlice } from '@reduxjs/toolkit'

const initial_state = {
	imBusy: true,
	error: false,
	lang:'en',
	pages:[],
	posts:[],
	menu:[]
}

const { actions, reducer } = createSlice({
	name: 'App',
	initialState: initial_state,
	reducers: {
		loadingInitialData(state, action) {
			state.imBusy = true
			state.error = false
			state.pages = []
			state.posts = []
			state.menu = []
        },
        
		successInitialData(state, action) {
			state.imBusy = false
			state.pages = action.payload.pages
			state.posts = action.payload.posts
			state.menu = action.payload.menu
		},
		failedInitialData(state, action) {
			state.imBusy = false
			state.error = action.payload
		},
		changeLang(state, action){
			state.lang = action.payload
		}
	},
})

export { actions, reducer }
