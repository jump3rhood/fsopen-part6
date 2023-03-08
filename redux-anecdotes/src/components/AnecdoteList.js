import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { upVote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const anecdotes = useSelector( (state) => {
    if(state.filter && state.filter.length === 0)
      return state.anecdotes
    else
      return state.anecdotes.filter(anecdote => anecdote.content.includes(state.filter))
  })
  const dispatch = useDispatch()
  const sortedAnecdotes = anecdotes.sort((first, second) => second.votes - first.votes)
  
  return (
    <div>
      {sortedAnecdotes.map(anecdote =>
        <Anecdote key={anecdote.id} anecdote={anecdote} handleClick={() => {
          dispatch(upVote(anecdote.id))
          dispatch(setNotification(`you voted ${anecdote.content}`, 5000))
        } }/>
      )}
    </div>
  )
}
const Anecdote = ({ anecdote, handleClick }) => {
  const {content, votes} = anecdote
  return (
      <div>
        <p>{content}</p>
        <p>has {votes} votes <button onClick={handleClick}>vote</button></p>
      </div> 
  )
}

export default AnecdoteList