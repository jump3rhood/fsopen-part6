import { createContext, useReducer, useContext } from "react"

const NotificationContext = createContext()

const notificationReducer = (state, action) => {
  switch(action.type){
    case 'SET' :
      return action.payload
    case 'RESET':
      return ''
    default:
      return state
  }
}

export const NotificationContextProvider = (props) => {

  const [notification, notificationDispatch] = useReducer(notificationReducer, '')
  return <NotificationContext.Provider value={ [notification, notificationDispatch] }>
    {props.children}
  </NotificationContext.Provider>
}
export const useNotificationValue = () => {
  const notiDispatch = useContext(NotificationContext)
  return notiDispatch[0]
}
export const useNotificationDispatch = () => {
  const notiDispatch = useContext(NotificationContext)
  return notiDispatch[1]
}

export default NotificationContext