import styled from 'styled-components'
import breakpoints from '../breakpoints'

export const Nav = styled.nav`
`

/*HEADER*/

export const Header = styled.header`
    height: 5rem;
    width: 100vw;
    display: flex;
    position: fixed;
    top:0;
    right: 0;
    background-color: black;
    z-index: 3;
    box-shadow: 0 0 15px #3f003f;
    
`
export const Content = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
`

export const Logo = styled.h1`
    font-size: 35px;
    cursor: pointer;
`

export const Links = styled.a`
    margin-left: 30px;
    cursor: pointer;
    color: gray;
    

    &:hover{
      color: white
    }

    @media(${breakpoints.md}){
      display: none;
    }
`

export const Button = styled.button`
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

`
