import styled from 'styled-components'
import breakpoints from '../breakpoints'

export const Main = styled.main`
    margin-top: 8rem;
    width: 80vw;

  `

//PRIMEIRA SECTION
export const FirstSection = styled.section`
    display: flex;
    width: 80%;
    margin: 0 auto;

    @media(${breakpoints.md}){
      display: flex;
      flex-direction: column;
      align-items: center;
    }
`

export const Div = styled.div`
    width: 100%;
    margin: 40px 0 0 0;
`

export const Name = styled.h1`
    font-size: 45px;

    @media(${breakpoints.md}){
          text-align: center;
    }
`

export const Developer = styled.h3`
    @media(${breakpoints.md}){
          text-align: center;
    }
`

export const Title = styled.h2`
@media(${breakpoints.md}){
      text-align: center;
    }
    
`

export const TextTitle = styled.p`
    width: 80%;
    text-align: justify;
    line-height: 30px;

    @media(${breakpoints.md}){
      width: 100%;
    }
`

export const DivButton = styled.div`
    @media(${breakpoints.md}){
          display: flex;
          flex-direction: column;
          align-items: center;
    }
`

export const ContactButton = styled.button`
    background-color: purple;
    width: 10rem;
    height: 3rem;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    font-weight: 600;
    margin-top: 30px;
    box-shadow: 0 0 15px purple;
    transition: 1s;
    margin-right: 20px;

    &:hover{
      background-color: transparent;
      border: 1px solid purple;
      transition: 1s;
    }

    &:active{
      scale: 0.95;
      transition: 0.1s;
    }

    @media(${breakpoints.bg}){
      margin-bottom: 20px;
      margin-right: 0;
    }

`

export const CVButton = styled.button`
    background-color: transparent;
    width: 10rem;
    height: 3rem;
    border-radius: 10px;
    border: 1px solid purple;
    cursor: pointer;
    font-weight: 600;
    box-shadow: 0 0 15px purple;
    transition: 1s;

    &:hover{
      background-color: purple;
      border: none;
      transition: 1s;
    }

    &:active{
      scale: 0.95;
      transition: 0.1s;
    }

`

export const Span = styled.span`
    color: purple;
`


