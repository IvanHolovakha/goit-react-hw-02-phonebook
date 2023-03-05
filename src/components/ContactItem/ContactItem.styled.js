import styled from "styled-components";

export const Item = styled.li`
font-weight: bold;
:not(:last-child) {
    margin-bottom: 10px;
}
`

export const Button = styled.button`
border-radius: 4px;
margin-left: 10px;
:hover {
    background-color: blue;
}
`