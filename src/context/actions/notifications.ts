type NotificationsActionsTypes = "SHOW" | "CLOSE"
type NotificationPayload = {
    title:string,
    message:string
}
export type Action = { type: NotificationsActionsTypes, payload?:NotificationPayload }

export const showNotification = (payload:NotificationPayload) : Action => ({type: "SHOW", payload})
export const closeNotification = () : Action => ({type: "CLOSE", payload: {message: '', title: ''}})