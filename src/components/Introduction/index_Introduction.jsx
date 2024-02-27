import { IntroductionSection } from "./style_IntroductionSection"

import { Link } from 'react-scroll'

import resume from '../../assets/cv.pdf'

export const Introduction = () => {
    return (
        <IntroductionSection>
          <div className='box'>
            <h1 className='name'>Gabriel <span>Lima</span></h1>
            <h3 className='developer'>Desenvolvedor Front-end</h3>
            <div className='boxButtons'>
              <Link to='contactMe' spy={true} smooth={true} offset={-40} duration={900}><button className='contactButton'>Entre em contato</button></Link>
              <button className='cvButton'> <a href={resume} download="CV Gabriel - Front-End">Baixar CV</a></button>
            </div>
          </div>
          <div className='box'>
            <h2 className='introductionTitle'>DANDO VIDA ÀS IDEIAS <br /> NO MUNDO DIGITAL<span>.</span></h2>
            <p className='textTitle'>Criatividade e inovação andam de mãos dadas. Com uma combinação singular de design impactante, funcionalidade intuitiva e otimização para resultados, estou pronto para construir a presença online dos seus sonhos.</p>
          </div>
        </IntroductionSection>
    )
}
