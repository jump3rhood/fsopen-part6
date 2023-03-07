import { QueryClient, useMutation } from "react-query"
import { createAnecdote } from "../requests"
const AnecdoteForm = () => {
  const queryClient = new QueryClient()
  const newMutation = useMutation(createAnecdote)
  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    console.log('new anecdote')
    newMutation.mutate({ content, votes: 0}, {
      onSuccess: () => {
        queryClient.invalidateQueries('anecdotes')
      }
    })
}

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
