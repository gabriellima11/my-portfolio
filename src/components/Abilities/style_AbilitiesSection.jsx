import styled from 'styled-components'
import breakpoints from '../../breakpoints'

//SEGUNDA SECTION

export const AbilitiesSection = styled.section`
    margin-top: 7rem;


   .abilitiesIcons{
      margin-top: 20px;
      text-align: center;
   }

   .icons{
   margin-right: 70px;
    padding: 60px 10px 2px 10px;
    border-radius: 20px;
    transition: 1.5s;

   &:hover{
    cursor: pointer;
    outline: 1px solid purple;
    
   }
   }

   //INICIO MEDIA SCREEN
    @media(${breakpoints.md}){
      width: 80vw;

      .abilitiesIcons{
      width: 100vw;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      }

      .icons{
         &:hover{
         cursor: pointer;
         outline: none;
      }
      }
    }
`
