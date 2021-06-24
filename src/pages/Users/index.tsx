import HomeButton from '../../components/HomeButton';
import UsersList from '../../components/UsersList';
import useUsers from '../../hooks/useUsers';

import { Container } from './styles'

function App() {

  const { users } = useUsers()

  return (
    <>
      <HomeButton />
      <Container>
          {users && <UsersList users={users}/>}
      </Container>
    </>
  );
}

export default App;