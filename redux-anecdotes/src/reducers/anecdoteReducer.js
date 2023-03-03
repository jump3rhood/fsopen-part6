import { createSlice } from "@reduxjs/toolkit"
import anecdoteService from '../services/anecdotes'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers : {
    upVote(state, action){
      const id = action.payload
      const anecdoteToChange = state.find(anec => anec.id === id)
      const changedAnecdote = { ...anecdoteToChange, votes: anecdoteToChange.votes + 1 }
      return state.map(anecdote => anecdote.id !== id ? anecdote : changedAnecdote )
    },
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
export const { upVote, setAnecdotes, appendAnecdote } = anecdoteSlice.actions
export default anecdoteSlice.reducer