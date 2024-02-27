import styled from 'styled-components'
import breakpoints from '../../breakpoints'


/*HEADER*/

export const HeaderSection = styled.header`
    height: 5rem;
    width: 100%;
    display: flex;
    position: fixed;
    top:0;
    right: 0;
    background-color: black;
    z-index: 3;
    box-shadow: 0 0 15px #3f003f;

    .content{
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
}

.logo{
    font-size: 35px;
    cursor: pointer;
}

.link{
    margin-left: 30px;
    cursor: pointer;
    color: gray;
    
    &:hover{
      color: white
    }
}

.contactButtonHeader{
    background-color: purple;
    width: 8rem;
    height: 2rem;
    border-radius: 30px;
    border: none;
    cursor: pointer;
    font-weight: 600;
    box-shadow: 0 0 15px purple;
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
}

@media(${breakpoints.sm}){
  .logo{
    font-size: 30px;
  }
  
}

@media(${breakpoints.md}){
  .link{
    display: none;
  }
      
    }

`

    


