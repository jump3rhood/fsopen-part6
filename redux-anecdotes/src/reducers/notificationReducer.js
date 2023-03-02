import { createSlice } from "@reduxjs/toolkit"

const notificationSlice = createSlice({
  name: 'notification',
  initialState: '',
  reducers: {
    setNotification(state, action){
      const newNotification = action.payload
      console.log(newNotification)
      return newNotification
    },
    resetNotification(state, action){
      return ''
    }
  }
})
export const { setNotification, resetNotification } = notificationSlice.actions
export default notificationSlice.reducer 