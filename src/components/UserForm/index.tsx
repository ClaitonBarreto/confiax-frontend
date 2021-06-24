import useFormField from "../../hooks/useFormField"
import useUsers from "../../hooks/useUsers"

import { FormContainer, InputElement, Button, FormWrapper } from './styles'

const UserForm = () => {

  const emailField = useFormField()
  const nameField = useFormField()
  const ageField = useFormField()

  const { create } = useUsers()

  const handleSubmit = async () => {
    await create(
      emailField.value,
      nameField.value,
      parseInt(ageField.value)
    )
  }

  return (
    <FormContainer>
      <FormWrapper>

        <InputElement type="text" placeholder="E-mail" {...emailField}/>
        <InputElement type="text" placeholder="Nome" {...nameField}/>
        <InputElement type="number" placeholder="Idade" {...ageField}/>
        <Button onClick={handleSubmit}>
          Adicionar
        </Button>
      </FormWrapper>
    </FormContainer>
    
  )

}

export default UserForm