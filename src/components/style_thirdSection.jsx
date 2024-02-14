import styled from 'styled-components'
import breakpoints from '../breakpoints'

//TERCEIRA SECTION

export const ThirdSection = styled.section`
    display: flex;
    margin: 10rem auto;
    width: 60%;

    @media(${breakpoints.md}){
      flex-direction: column;
    }
`

export const PersonImg = styled.img`
    width: 250px;
    border-radius: 20px;
    margin-right: 20px;

    @media(${breakpoints.md}){
      width: 10rem;
      margin: 10px auto;
    }
`

export const DivAboutMe = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const Text = styled.p`
    margin: 10px 0 10px 0;
    width: 80%;
    text-align: justify;
    
    @media(${breakpoints.md}){
        width: 100%;
    }
`

export const RoundButton = styled.button`
    background-color: purple;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    cursor: pointer;
    transition: 1s;
    margin: auto 5px;

    &:hover{
      background-color: transparent;
      border: 1px solid purple;
      transition: 1s;
      box-shadow: 0 0 15px purple;
    }

    &:active{
      scale: 0.95;
      transition: 0.1s;
    }
`

