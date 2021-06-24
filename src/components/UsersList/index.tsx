import { useHistory } from 'react-router-dom'
import AddUserButton from '../AddUserButton'
import { RootTable } from './styles'

const UsersList = ({users}:{users:User[]}) => {

  const { push } = useHistory()

  return (
    <>
      <h3>Lista de Usuários Cadastrados</h3>
      <RootTable>
        <thead>
            <tr>
                <td>Nome</td>
                <td>Email</td>
            </tr>
        </thead>
        <tbody>

        {users.map((user,i) => (
            <tr key={i} onClick={() => push(`/users/${user.id}`)}>
                <td>{user.name}</td>
                <td>{user.email}</td>
            </tr>
            
        ))}
        </tbody>
      </RootTable>
      <AddUserButton />
    </>
  )

}

export default UsersList