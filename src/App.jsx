import React from 'react';
import { Link } from 'react-scroll'
import { ProjectsList } from './projects';

//STYLED COMPONENTS
import { Nav, Logo, Header, Button, Content, Links } from './components/style_header'
import { Main, FirstSection, Span, TextTitle, ContactButton, CVButton, Name, Div, Title, DivButton, Developer } from './components/style_IntroductionSection'
import { SecondSection, AbilitiesIcons, Icons } from './components/style_AbilitiesSection';
import { ThirdSection, PersonImg, Text, DivAboutMe, RoundButton } from './components/style_AboutMeSection';
import { FourthSection, ProjectsDiv, Projects, DescriptionProject, ImageProject, ButtonProject} from './components/style_ProjectsSection';
import { FifthSection, DivContact, Inputs, InputMessage, SendButton } from './components/style_ContactMeSection';
import { Footer } from './components/style_footer';

//IMAGES
import ProfilePicture from './assets/foto_perfil.jpeg'

//ICONS
import { FaHtml5, FaCss3, FaReact, FaNode, FaGitAlt, FaGithub, FaLinkedin, FaGithubAlt, FaExternalLinkAlt } from 'react-icons/fa'
import { IoLogoJavascript } from "react-icons/io";

//ARQUIVOS
import resume from './assets/cv.pdf'

function App() {
  return (
    <>
      <Header id='header'>
        <Content>
          <Logo><span>GFL</span> DEV</Logo>
          <Nav>
            <Link to='start' spy={true} smooth={true} offset={-100} duration={500}> <Links>Início</Links> </Link>
            <Link to='abilities' spy={true} smooth={true} offset={-100} duration={500}> <Links>Especialidades</Links> </Link>
            <Link to='aboutMe' spy={true} smooth={true} offset={-100} duration={500}> <Links>Sobre</Links> </Link>
            <Link to='projects' spy={true} smooth={true} offset={-100} duration={500}> <Links> Projetos</Links> </Link>
          </Nav>
          <Link to='contactMe' spy={true} smooth={true} offset={-40} duration={900}><Button>Contato</Button></Link>
        </Content>
      </Header>
      <Main id='start'>
        <FirstSection>
          <Div>
            <Name>Gabriel <span>Lima</span></Name>
            <Developer>Desenvolvedor Front-end</Developer>
            <DivButton>
              <Link to='contactMe' spy={true} smooth={true} offset={-40} duration={900}><ContactButton>Entre em contato</ContactButton></Link>
              <CVButton> <a href={resume} download="CV Gabriel - Front-End">Baixar CV</a></CVButton>
            </DivButton>
          </Div>
          <Div>
            <Title>DANDO VIDA ÀS IDEIAS <br /> NO MUNDO DIGITAL<Span>.</Span></Title>
            <TextTitle>Criatividade e inovação andam de mãos dadas. Com uma combinação singular de design impactante, funcionalidade intuitiva e otimização para resultados, estou pronto para construir a presença online dos seus sonhos.</TextTitle>
          </Div>
        </FirstSection>
        <SecondSection>
          <div className="barra" id='abilities'></div>
          <h1 className='title'>MINHAS <span>HABILIDADES</span></h1>
          <AbilitiesIcons>
            <Icons><FaHtml5 size={70}></FaHtml5></Icons>
            <Icons><FaCss3 size={70}></FaCss3></Icons>
            <Icons><IoLogoJavascript size={70}></IoLogoJavascript></Icons>
            <Icons><FaReact size={70}></FaReact></Icons>
            <Icons><FaNode size={70}></FaNode></Icons>
            <Icons><FaGitAlt size={70}></FaGitAlt></Icons>
            <Icons><FaGithub size={70}></FaGithub></Icons>
          </AbilitiesIcons>
        </SecondSection>
        <ThirdSection id='aboutMe'>
          <PersonImg src={ProfilePicture} />
          <DivAboutMe>
            <h2>HELLO WORLD, <br /><Span>SOU GABRIEL LIMA.</Span></h2>
            <Text>Dou as boas-vindas ao meu mundo criativo! Sou apaixonado por programação, onde busco constantemente explorar novas fronteiras e desafiar minha criatividade. Ao longo dos anos, desenvolvi habilidades em Desenvolvivmento Web, e estou sempre em busca de aprimorar meu conhecimento.</Text>
            <div>
              <RoundButton><a href="https://www.linkedin.com/in/limaf-gabriel" target='_blank'><FaLinkedin size={30}></FaLinkedin></a></RoundButton>
              <RoundButton><a href="https://github.com/gabriellima11" target='_blank'><FaGithubAlt size={30}></FaGithubAlt></a></RoundButton>
            </div>
          </DivAboutMe>
        </ThirdSection>
        <div className="barra"></div>
        <FourthSection id='projects'>
          <h1 className='title'>MEUS <span>PROJETOS</span></h1>


          <ProjectsDiv>
          {ProjectsList.map((item) => (
            <Projects>
                <div>
                  <h3>{item.nome}</h3>
                  <ImageProject src={item.image} />
                  <DescriptionProject>{item.description}</DescriptionProject>
                  <a href={item.link} target='_blank'> <ButtonProject><FaExternalLinkAlt></FaExternalLinkAlt>Link</ButtonProject></a>
                  <a href={item.github} target='_blank'> <ButtonProject><FaGithub></FaGithub>GitHub</ButtonProject></a>
                </div>
            </Projects>
            ))}
          </ProjectsDiv>


        </FourthSection>
        <div className="barra"></div>
        <FifthSection id='contactMe'>
          <h1 className='title'>FALE <span>COMIGO</span></h1>
          <DivContact action="https://formsubmit.co/gabrielflima05@gmail.com" method="POST">
            <Inputs type='text' name='name' placeholder='Seu nome: ' />
            <Inputs type='email' name='email' placeholder='Seu e-mail: ' />
            <Inputs type='tel' name='telefone' placeholder='Seu telefone: ' />
            <InputMessage name="message" id="" cols="30" rows="10" placeholder='Sua mensagem: '></InputMessage>
            <SendButton type='submit' target='_blank'>ENVIAR</SendButton>
          </DivContact>
        </FifthSection>
      </Main>
      <div className="barra"></div>
      <Footer>
        <div>
          <Logo><span>GFL</span></Logo>
        </div>
        <div>
          <RoundButton><a href="https://www.linkedin.com/in/limaf-gabriel" target='_blank'><FaLinkedin size={30}></FaLinkedin></a></RoundButton>
          <RoundButton><a href="https://github.com/gabriellima11" target='_blank'><FaGithubAlt size={30}></FaGithubAlt></a></RoundButton>
        </div>
      </Footer>
    </>
  );
}

export default App;
