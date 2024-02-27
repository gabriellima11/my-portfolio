import styled from 'styled-components';

export const ContactSection = styled.section`
    padding: 50px 0 50px 0;

    .boxContact{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }

    .inputs{
        width: 300px;
        height: 50px;
        padding-left: 10px;
        border-radius: 10px;
        background-color: #1a1919;
        border: none;
    }

    .inputMessage{
        width: 300px;
        height: 120px;
        padding: 10px 0 0 10px;
        border-radius: 10px;
        background-color: #1a1919;
        border: none;
        resize: none;
    }

    .sendButton{
        background-color: purple;
        width: 10rem;
        height: 3rem;
        border-radius: 10px;
        border: none;
        cursor: pointer;
        font-weight: bold;
        font-size: 17px;
        margin-top: 10px;
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
`
