import styled from "styled-components";

export const RootTable = styled.table`
    border: 1px solid #777;
    font-size: 1.2rem;
    margin: .5rem 0;
    
    thead > tr {
        background-color: #345995;
        color: #fff;
    }

    tr {
        transition: .2s;
        background-color: #eee;
    }

    td {
        padding: .1rem 1rem;
    }

    tr:not(thead>tr):hover {
        background-color: #999;
        transform: scale(1.1);
        cursor: pointer;
    }
`