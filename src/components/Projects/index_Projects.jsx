import { ProjectsSection } from './style_ProjectsSection';

import { ProjectsList } from '../../projects';

import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

export const Projects = () =>{
    return (
        <ProjectsSection id='projects'>
          <h1 className='title'>MEUS <span>PROJETOS</span></h1>
          <div className='boxProjects'>
          {ProjectsList.map((item) => (
            <div className='project'>
                <div>
                  <h3>{item.nome}</h3>
                  <img className='imageProject' src={item.image} />
                  <p className='descriptionProject'>{item.description}</p>
                  <a href={item.link} target='_blank'> <button className='buttonProject'><FaExternalLinkAlt></FaExternalLinkAlt>Link</button></a>
                  <a href={item.github} target='_blank'> <button className='buttonProject'><FaGithub></FaGithub>GitHub</button></a>
                </div>
            </div>
            ))}
          </div>
        </ProjectsSection>
    )
}