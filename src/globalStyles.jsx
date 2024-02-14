import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #fff;
    font-family: 'Poppins', sans-serif;
}

body{
    width: 80vw;
    height: 100vh;
    margin: 0 auto;
    background-color: #000;
}

span{
    color: purple;
}

a{
    text-decoration: none;
}

.barra{
    height: 1px;
    margin: 10px 0; /* Espaçamento superior e inferior da barra */
    box-shadow: 0 10px 2px purple;
}

.title{
    text-align: center;
    margin: 30px 0 30px 0;
}

@media(max-width: 700px){
      body{
        width: 70vw;
      }
    }
`

