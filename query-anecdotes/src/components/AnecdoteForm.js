import { useQueryClient, useMutation } from "react-query"
import { createAnecdote } from "../requests"
import { useNotificationDispatch } from "../NotificationContext"

const AnecdoteForm = () => {
  const notificationDispatch = useNotificationDispatch()
  const queryClient = useQueryClient()
  const newMutation = useMutation(createAnecdote)

  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    console.log('new anecdote')
    newMutation.mutate({ content, votes: 0}, {
      onSuccess: (newAnec) => {
        const anecdotes = queryClient.getQueryData('anecdotes')
        queryClient.setQueryData('anecdotes', anecdotes.concat(newAnec))
        notificationDispatch({
          type: 'SET',
          payload: `added new anecdote '${newAnec.content}'`
        })
      },
      onError: () => {
        console.log('HOHHOHO')
        notificationDispatch({
          type: 'SET',
          payload: 'too short anecdote, must have length 5 or more'
        })
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
