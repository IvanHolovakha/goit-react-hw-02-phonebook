import styled from "styled-components";

export const Form = styled.form`
display: flex;
flex-direction: column;
width: 400px;
padding: 15px;
border: 1px solid black;
`

export const InputWrapper = styled.label`
display: flex;
flex-direction: column;
font-weight: bold;
margin-bottom: 25px;
`

export const Input = styled.input`
width: 200px;
margin-top: 10px;
`

export const Button = styled.button`
width: 125px;
border-radius: 4px;
:hover {
    background-color: blue;
}
`