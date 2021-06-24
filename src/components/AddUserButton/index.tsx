import { useHistory } from 'react-router-dom'

import { AddButton, AddButtonContainer } from './styles'

const AddUserButton = () => {

    const { push } = useHistory()

    return (
        <AddButtonContainer>
            <AddButton onClick={() => push('/users/create')}>
                Adicionar Novo
            </AddButton>
        </AddButtonContainer>
    )

}

export default AddUserButton