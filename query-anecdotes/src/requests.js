import axios from 'axios'
const baseUrl = 'http://localhost:3001/anecdotes'

export const getAll = () => axios.get(baseUrl).then(res => res.data)
export const createAnecdote = (object) => 
  axios
    .post(baseUrl, object)
    .then(res => res.data)
export const updateAnecdote = (updatedObj) => {
  return axios
    .put(`${baseUrl}/${updatedObj.id}`, updatedObj)
    .then(res => res.data) 
}