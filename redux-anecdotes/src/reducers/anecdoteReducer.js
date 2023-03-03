import { createSlice } from "@reduxjs/toolkit"

const getId = () => (100000 * Math.random()).toFixed(0)

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers : {
    createAnecdote(state, action){
      const newAnecdote = action.payload
      state.push(newAnecdote)
    },
    upVote(state, action){
      const id = action.payload
      const anecdoteToChange = state.find(anec => anec.id === id)
      const changedAnecdote = { ...anecdoteToChange, votes: anecdoteToChange.votes + 1 }
      return state.map(anecdote => anecdote.id !== id ? anecdote : changedAnecdote )
    },
    setAnecdotes(state, action){
      return action.payload
    }
  }
})
export const { createAnecdote, upVote, setAnecdotes } = anecdoteSlice.actions
export default anecdoteSlice.reducer