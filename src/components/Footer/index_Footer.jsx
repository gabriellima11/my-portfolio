import { FooterSection } from "./style_footer"

import { FaLinkedin, FaGithubAlt } from 'react-icons/fa'

export const Footer = () =>{
    return (
        <FooterSection>
        <div>
          <h2 className="nameFooter"><span>GFL</span></h2>
        </div>
        <div>
          <button className='roundButton'><a href="https://www.linkedin.com/in/limaf-gabriel" target='_blank'><FaLinkedin size={30}></FaLinkedin></a></button>
          <button className='roundButton'><a href="https://github.com/gabriellima11" target='_blank'><FaGithubAlt size={30}></FaGithubAlt></a></button>
        </div>
      </FooterSection>
    )
}