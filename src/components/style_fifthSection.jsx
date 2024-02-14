import styled from 'styled-components';

export const FifthSection = styled.section`
    padding: 50px 0 50px 0;
`

export const DivContact = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`

export const Inputs = styled.input`
    width: 300px;
    height: 50px;
    padding-left: 10px;
    border-radius: 10px;
    background-color: #1a1919;
    border: none;
`

export const InputMessage = styled.textarea`
    width: 300px;
    height: 120px;
    padding: 10px 0 0 10px;
    border-radius: 10px;
    background-color: #1a1919;
    border: none;
    resize: none;
`

export const SendButton = styled.button`
    background-color: purple;
    width: 10rem;
    height: 3rem;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    font-weight: bold;
    font-size: 17px;
    margin-top: 10px;
    transition: 1s;

    &:hover{
      background-color: transparent;
      border: 1px solid purple;
      transition: 1s;
    }

    &:active{
      scale: 0.95;
      transition: 0.1s;
    }
`