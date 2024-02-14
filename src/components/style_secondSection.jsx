import styled from 'styled-components'
import breakpoints from '../breakpoints'

//SEGUNDA SECTION

export const SecondSection = styled.section`
    margin-top: 7rem;

    @media(${breakpoints.md}){
      width: 80vw;
    }
`

export const AbilitiesTitle = styled.h1`
   text-align: center;
   margin: 30px 0 30px 0;
`

export const AbilitiesIcons = styled.div`
   margin-top: 20px;
   text-align: center;

   @media(${breakpoints.md}){
      width: 100vw;
      display: flex;
      flex-wrap: wrap;
    }
`

export const Icons = styled.i`
    margin-right: 70px;
    padding: 60px 10px 2px 10px;
    border-radius: 20px;
    transition: 1.5s;

   &:hover{
    cursor: pointer;
    outline: 1px solid purple;
    
   }

   @media(${breakpoints.md}){
      &:hover{
      cursor: pointer;
      outline: none;
      }
   }
`
