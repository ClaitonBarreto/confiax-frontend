import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const AppTitle = styled.h1`
    font-size: 1.8rem;
`
export const Button = styled.button`
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

export const ButtonsWrapper = styled.div`
    margin: 1rem 0;
    width: 30%;
    height: 2rem;
    display: flex;
    justify-content: space-around;
`