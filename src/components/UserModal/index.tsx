type LocalUser = User | undefined

const UserModal = ({user}:{user:LocalUser}) => {

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>Dados do Usuário</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Nome</td>
            <td>{user?.name}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{user?.email}</td>
          </tr>
          <tr>
            <td>Idade</td>
            <td>{user?.age}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )

}

export default UserModal