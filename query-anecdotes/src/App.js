import { 
  // QueryClient,
   useQuery } from 'react-query'
import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { getAll } from './requests'

const App = () => {
  // const queryClient = new QueryClient()
  const result = useQuery(
    'anecdotes',
    getAll, {
      refetchOnWindowFocus: false,
      retry: 1
    }
  )
  const { data, status } = result
  console.log(result)
  if(status === 'loading'){
    return <h1>Loading...</h1>
  }
  if(status === 'error'){
    return <div>anecdote service not available due to problems in server</div>
  }
  const handleVote = (anecdote) => {
    console.log('vote')
  }

  const anecdotes = data

  return (
    <div>
      <h3>Anecdote app</h3>
    
      <Notification />
      <AnecdoteForm />
    
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
