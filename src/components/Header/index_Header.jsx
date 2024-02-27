import { HeaderSection } from './style_header'

import { Link } from 'react-scroll'

export const Header = () =>{
  return (
      <HeaderSection id='header'>
      <div className='content'>
        <h2 className='logo'><span>GFL</span> DEV</h2>
        <nav>
          <Link to='start' spy={true} smooth={true} offset={-100} duration={500}> <a className='link'>Início</a> </Link>
          <Link to='abilities' spy={true} smooth={true} offset={-100} duration={500}> <a className='link'>Especialidades</a> </Link>
          <Link to='aboutMe' spy={true} smooth={true} offset={-100} duration={500}> <a className='link'>Sobre</a> </Link>
          <Link to='projects' spy={true} smooth={true} offset={-100} duration={500}> <a className='link'> Projetos</a> </Link>
        </nav>
        <Link to='contactMe' spy={true} smooth={true} offset={-40} duration={900}><button className='contactButtonHeader'>Contato</button></Link>
      </div>
    </HeaderSection>
    )
}