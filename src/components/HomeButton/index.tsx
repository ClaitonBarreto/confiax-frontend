import {AiFillHome} from 'react-icons/ai'
import { useHistory } from 'react-router-dom'

import { Container } from './styles'

const HomeButton = () => {

    const { push } = useHistory()

    return (
        <Container>
            <AiFillHome 
                size={32} 
                color="#345995"
                onClick={() => push("/")}
            />
        </Container>
    )

}

export default HomeButton