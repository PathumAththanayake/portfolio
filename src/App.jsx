import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import SectionFade from './components/SectionFade';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.background};
`;

function App() {
  return (
    <AppContainer>
      <Navbar />
      
      {/* Home - Dark theme, no top fade needed */}
      <SectionFade from="dark" to="dark" showBottomFade={true} showGlassDivider={true} showGradientAccent={true}>
        <Home />
      </SectionFade>
      
      {/* Skills - Dark theme, transitioning to light */}
      <SectionFade from="dark" to="light" showTopFade={true} showBottomFade={true} showGlassDivider={true} showGradientAccent={true}>
        <Skills />
      </SectionFade>
      
      {/* About - Light theme */}
      <SectionFade from="light" to="light" showTopFade={true} showBottomFade={true} showGlassDivider={true} showGradientAccent={true}>
        <About />
      </SectionFade>
      
      {/* Projects - Light theme, transitioning to dark */}
      <SectionFade from="light" to="dark" showTopFade={true} showBottomFade={true} showGlassDivider={true} showGradientAccent={true}>
        <Projects />
      </SectionFade>
      
      {/* Contact - Dark theme */}
      <SectionFade from="dark" to="dark" showTopFade={true} showGradientAccent={true}>
        <Contact />
      </SectionFade>
      
      <Footer />
    </AppContainer>
  );
}

export default App;
