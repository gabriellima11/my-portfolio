import styled from 'styled-components';

export const FooterSection = styled.footer`
    height: 5rem;
    width: 80vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: black;

    .roundButton{
    background-color: purple;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    cursor: pointer;
    transition: 1s;
    margin: auto 5px;
  }

  .nameFooter{
    font-size:35px;
  }
`