import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { closeNotification } from '../../context/actions/notifications'

import { NotificationContainer, NotificationText, NotificationButton } from './styles'

const Notification = () => {

  const dispatch = useDispatch()
  
  const notification : NotificationProps = useSelector(
    (state: NotificationState) => state.notification,
    shallowEqual
  )

  const { isOpen, message } = notification


  const close = () => {
    dispatch(closeNotification())
  }

  return (
    <>
      {isOpen ? 
        <NotificationContainer>
            <NotificationText>{message}</NotificationText>
            <NotificationButton onClick={close}>close</NotificationButton>
        </NotificationContainer>    
      : null}
    </>
  )

}

export default Notification