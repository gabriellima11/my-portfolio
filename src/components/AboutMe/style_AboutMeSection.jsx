import styled from 'styled-components'
import breakpoints from '../../breakpoints'

//TERCEIRA SECTION

export const AboutMeSection = styled.section`
    display: flex;
    margin: 10rem auto;
    width: 60%;


  .personImage{
    width: 250px;
    border-radius: 20px;
    margin-right: 20px;
  }

  .boxAboutMe{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .textAboutMe{
    margin: 10px 0 10px 0;
    width: 80%;
    text-align: justify;
  }

  .roundButton{
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
  }

  //INICIO MEDIA SCREEN
    @media(${breakpoints.md}){
      flex-direction: column;
      width: 80%;
      text-align: center;

      .personImage{
      width: 10rem;
      margin: 10px auto;
      }

      .textAboutMe{
        width: 100%;
      }
    }
`

