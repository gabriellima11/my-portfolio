import { AbilitiesSection } from "./style_AbilitiesSection"

//ICONS
import { FaHtml5, FaCss3, FaReact, FaNode, FaGitAlt, FaGithub} from 'react-icons/fa'
import { IoLogoJavascript } from "react-icons/io";


export const Abilities = () =>{
    return(
        <AbilitiesSection>
          <div className="barra" id='abilities'></div>
          <h1 className='title'>MINHAS <span>HABILIDADES</span></h1>
          <div className='abilitiesIcons'>
            <i className='icons'><FaHtml5 size={70}></FaHtml5></i>
            <i className='icons'><FaCss3 size={70}></FaCss3></i>
            <i className='icons'><IoLogoJavascript size={70}></IoLogoJavascript></i>
            <i className='icons'><FaReact size={70}></FaReact></i>
            <i className='icons'><FaNode size={70}></FaNode></i>
            <i className='icons'><FaGitAlt size={70}></FaGitAlt></i>
            <i className='icons'><FaGithub size={70}></FaGithub></i>
          </div>
        </AbilitiesSection>
    )
}