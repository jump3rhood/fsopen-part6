const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}
// ACTION-DISPATCHERS
export const createAnecdote = (content) => {
  return {
    type: 'CREATE',
    payload: asObject(content)
  }
}

export const upVote = (id) => {
  return {
    type: 'UPVOTE',
    payload: { id }
  }
}
// end ACTION-DISPACTCHERS
const initialState = anecdotesAtStart.map(asObject)

const reducer = (state = initialState, action) => {
  switch(action.type){
    case 'CREATE': 
      return state.concat(action.payload)
    case 'UPVOTE':{
      const { id } = action.payload
      const anecdoteToChange = state.find(anec => anec.id === id)
      const changedAnecdote = { ...anecdoteToChange, votes: anecdoteToChange.votes + 1 }
      return state.map(anecdote => anecdote.id !== id ? anecdote : changedAnecdote )
    }
    default:
      return state
  }
}

export default reducer