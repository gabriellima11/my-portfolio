import { AboutMeSection } from "./style_AboutMeSection"

import ProfilePicture from '../../assets/foto_perfil.jpeg'

import { FaLinkedin, FaGithubAlt } from 'react-icons/fa'

export const AboutMe = () =>{
    return(
    <AboutMeSection id='aboutMe'>
    <img className='personImage' src={ProfilePicture} />
    <div className='boxAboutMe'>
      <h2>HELLO WORLD, <br /><span>SOU GABRIEL LIMA.</span></h2>
      <p className='textAboutMe'>Dou as boas-vindas ao meu mundo criativo! Sou apaixonado por programação, onde busco constantemente explorar novas fronteiras e desafiar minha criatividade. Ao longo dos anos, desenvolvi habilidades em Desenvolvivmento Web, e estou sempre em busca de aprimorar meu conhecimento.</p>
      <div>
        <button className='roundButton'><a href="https://www.linkedin.com/in/limaf-gabriel" target='_blank'><FaLinkedin size={30}></FaLinkedin></a></button>
        <button className='roundButton'><a href="https://github.com/gabriellima11" target='_blank'><FaGithubAlt size={30}></FaGithubAlt></a></button>
      </div>
    </div>
  </AboutMeSection>
  )

}