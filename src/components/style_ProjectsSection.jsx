import styled from 'styled-components'

export const FourthSection = styled.section`
    padding: 30px 0 60px 0;
`

export const ProjectsTitle = styled.h1`
    text-align: center;
    margin: 30px 0 30px 0;
`

export const ProjectsDiv = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`

export const Projects = styled.div`
    border: 1px solid purple;
    width: 350px;
    height: 450px;
    border-radius: 20px;
    transition: 1s;
    padding: 10px;
    margin-bottom: 30px;
    text-align: center;

    &:hover{
        scale: 1.05;
        box-shadow: 8px 9px 5px 0px rgba(102,3,102,1);
    }

`

export const DescriptionProject = styled.p`
    margin-top: 20px;
    width: 100%;
`

export const ImageProject = styled.img`
    margin-top: 20px;
    width: 90%;
    border-radius: 10px;
`

export const ButtonProject = styled.button`
    background-color: purple;
    border: none;
    border-radius: 20px;
    width: 35%;
    height: 40px;
    margin: 10px;
    cursor: pointer;
`