import styled from "styled-components";

export const AddButtonContainer = styled.div`
    margin: 1rem 0;
    width: 30%;
    height: 2rem;
    display: flex;
    justify-content: space-around;
`

export const AddButton = styled.button`
    height: 100%;
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
    }
`