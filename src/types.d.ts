type User = {
    email:string,
    name:string,
    id:number,
    age:number
}

type NotificationProps = {
    isOpen: boolean,
    title: string,
    message: string
}

type NotificationState = {
    notification: NotificationProps
}

type NotificationActions = {
    type:string
    payload: NotificationProps
}

type DispatchType = (args: NotificationActions) => NotificationActions