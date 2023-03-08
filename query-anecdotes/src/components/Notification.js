import { useEffect } from "react"
import { useNotificationDispatch, useNotificationValue} from "../NotificationContext"
const Notification = () => {
  const message = useNotificationValue()
  const notiDispatch = useNotificationDispatch()
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 5
  }
  useEffect(()=> {
    let timer
    if(message){
      timer = setTimeout(()=> notiDispatch({ type: 'RESET', payload: ''}), 5000)
    }
    if(timer)
      return () => clearTimeout(timer)
  })
  if (!message && message.length <1) return null
  
  return (
    <div style={style}>
      {message}
    </div>
  )
}

export default Notification
