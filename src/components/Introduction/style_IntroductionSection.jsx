import styled from 'styled-components'
import breakpoints from '../../breakpoints'

export const Main = styled.main`
    margin-top: 8rem;
    width: 80vw;

  `

//PRIMEIRA SECTION
export const IntroductionSection = styled.section`
    display: flex;
    width: 80%;
    margin: 0 auto;

    .box{
      width: 100%;
      margin: 40px 0 0 0;
    }

    .name{
      font-size: 45px;
    }

    .textTitle{
      margin-top: 10px;
    }

    .contactButton{
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
    }


    .cvButton{
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
    }

//INICIO MEDIA SCREEN
    @media(${breakpoints.md}){
      display: flex;
      flex-direction: column;
      align-items: center;

      .name{
        text-align: center;
      }
      
      .developer{
        text-align: center;
      }

      .boxButtons{
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      
      .introductionTitle{
        text-align: center;
      }

      .textTitle{
        width: 80%;
        text-align: justify;
        line-height: 30px;
      }

      .textTitle{
        width: 100%;
      }
    }

  
    @media(${breakpoints.bg}){
      .contactButton{
        margin-bottom: 20px;
        margin-right: 0px;
      }
      
    }
`


