import React from 'react';

import { Abilities } from './components/Abilities/index_Abilities';
import { AboutMe } from './components/AboutMe/index_AboutMe';
import { Header } from './components/Header/index_Header';
import { Footer } from './components/Footer/index_Footer';
import { Introduction } from './components/Introduction/index_Introduction';
import { Projects } from './components/Projects/index_Projects';
import { ContactMe } from './components/ContactMe/index_Contact';

//STYLED COMPONENTS
import { Main } from './components/Introduction/style_IntroductionSection'


function App() {
  return (
    <>
      <Header />

      <Main id='start'>
        
      <Introduction />
      <Abilities />
      <AboutMe />
      <div className="barra"></div>
      <Projects />
      <div className="barra"></div>
      <ContactMe />

      </Main>

      <div className="barra"></div>
      <Footer />
      
    </>
  );
}

export default App;
