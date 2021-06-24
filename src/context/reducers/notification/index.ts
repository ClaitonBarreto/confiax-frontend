import { Action } from "../../actions/notifications"

const initialState:NotificationState = {
    notification: {
        isOpen: false,
        message: '',
        title: ''
    }
}

export const notificationReducer = (state: NotificationState = initialState, action:Action) => {
    switch(action.type) {
        case 'SHOW':
            return {...state, notification: {...state.notification, isOpen: true, ...action.payload}}
        case 'CLOSE':
            return {...state, notification: {...state.notification, isOpen: false, ...action.payload}}        
        default:
            return state
    }
}