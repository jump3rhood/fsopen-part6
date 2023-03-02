import { configureStore } from "@reduxjs/toolkit"
import anecdoteReducer from './anecdoteReducer'
import filterReducer from './filterReducer'

const store = configureStore({
  reducer: {
    anecdotes: anecdoteReducer,
    filter: filterReducer
  }
})
console.log(store.getState())
export default store