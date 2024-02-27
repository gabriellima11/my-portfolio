import styled from 'styled-components'

export const ProjectsSection = styled.section`
    padding: 30px 0 60px 0;

    .boxProjects{
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }

    .project{
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
    }

    .descriptionProject{
        margin-top: 20px;
        width: 100%;
    }

    .imageProject{
        margin-top: 20px;
        width: 90%;
        border-radius: 10px;
    }

    .buttonProject{
        background-color: purple;
        border: none;
        border-radius: 20px;
        width: 35%;
        height: 40px;
        margin: 10px;
        cursor: pointer;
    }
`