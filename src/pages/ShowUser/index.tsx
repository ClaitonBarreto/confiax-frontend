import { useParams } from 'react-router-dom'

import UserModal from '../../components/UserModal'
import useUsers from '../../hooks/useUsers'

const ShowUser = () => {

    const { id } = useParams<{id:string}>()
    const { user } = useUsers(id)

    return (
        <div>
            <UserModal user={user}/>
        </div>
    )

}

export default ShowUser