import styled from 'styled-components'

export const NotificationContainer = styled.div`
    width: 100vw !important;
    height: auto;
    box-shadow: 1px 1px 2px #777;
    display: flex;
    flex-direction: column;
    background-color: red;
    margin-bottom: 1rem;
    align-items: center;
    padding: .5rem;
`

export const NotificationText = styled.h2`
    text-align: center;
`

export const NotificationButton = styled.button`
    width: 10%;    
`