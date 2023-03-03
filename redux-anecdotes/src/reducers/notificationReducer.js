import { createSlice } from "@reduxjs/toolkit"

const notificationSlice = createSlice({
  name: 'notification',
  initialState: '',
  reducers: {
     newNotification(state, action){
      return action.payload
    },
    resetNotification(state, action){
      return ''
    }
  }
})
export const setNotification = (message, timeInMs) => {
  return (dispatch) => {
    dispatch(newNotification(message))
    setTimeout(() => dispatch(resetNotification()), timeInMs)
  }
}
export const { newNotification, resetNotification } = notificationSlice.actions
export default notificationSlice.reducer 