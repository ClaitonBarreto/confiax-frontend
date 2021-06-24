import { useHistory } from 'react-router-dom'

import { Container, AppTitle, Button, ButtonsWrapper } from './styles'

const HomePage = () => {

    const history = useHistory()
    return (
        <Container>
            <AppTitle>Teste Confiax</AppTitle>
            <ButtonsWrapper>
                <Button onClick={() => history.push('users/create')}>Adicionar Usuário</Button>
                <Button onClick={() => history.push('users/')}>Listar Usuários Cadastrados</Button>
            </ButtonsWrapper>
        </Container>
    )

}

export default HomePage