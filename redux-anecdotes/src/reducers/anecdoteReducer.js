import { createSlice } from "@reduxjs/toolkit"
import anecdoteService from '../services/anecdotes'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers : {
    setAnecdotes(state, action){
      return action.payload
    },
    appendAnecdote(state, action){
      state.push(action.payload)
    }
  }
})

export const createAnecdote = (content) => {
 return async (dispatch) => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(appendAnecdote(newAnecdote))
 } 
}
export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}
export const upVote = (id) => {
  return async (dispatch, getState) => {
    const updatedAnecdote = await anecdoteService.update(id)
    const anecdotesList = getState().anecdotes.map(anecdote => anecdote.id !== id ? anecdote : updatedAnecdote)
    dispatch(setAnecdotes(anecdotesList))
  }
}
export const { setAnecdotes, appendAnecdote } = anecdoteSlice.actions
export default anecdoteSlice.reducer