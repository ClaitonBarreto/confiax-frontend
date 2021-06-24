import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import api from '../services/api'
import { showNotification } from '../context/actions/notifications'

const useUsers = (id:string = '0') => {

    const { push: navigate } = useHistory()
    const dispatch = useDispatch()

    const [users, setUsers] = useState<User[]>([])
    const [user, setUser] = useState<User>()

    useEffect(() => {
        
        if(id !== '0') {
            
            (async () => {
                setUser(await getUser(id))
            })()
        }
        
        (async () => {
        setUsers(await listAll())
        })()
    
      }, [id])

    const create = async (
        name:string|undefined, 
        email:string|undefined,
        age:number|undefined
    ) => {
        const response = await api.post('/users', {user: {name, email, age}})

        if(response.status === 201) {
            dispatch(showNotification({message: 'Usuário inserido!', title: 'OK'}))
            return navigate('/users')
        }

    }

    const listAll = async () : Promise<User[]> => {
        const { data } = await api.get('/users')

        return data
    }

    const getUser = async (id:string) : Promise<User> => {
        const { data } = await api.get(`/users/${id}`)

        return data
    }


    return {create, listAll, users, getUser, user}
}

export default useUsers