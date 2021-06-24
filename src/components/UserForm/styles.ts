import styled from "styled-components";

export const FormContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 30%;
    width: 25%;
    justify-content: space-between;
`

export const InputElement = styled.input`
    height: 2rem;
    padding: 0 0 0 1rem;
    border: none;
    border-bottom: 1px solid #999;
    outline: none;
    color: #999;
`

export const Button = styled.button`
    background-color: #345995;
    border: none;
    outline: none;
    padding: .5rem 1rem;
    text-align: center;
    color: #fff;
    font-weight: bold;
    border-radius: .5rem;
    cursor: pointer;
    transition: .2s;

    :hover {
        box-shadow: 1px 1px 3px #777;
    }`