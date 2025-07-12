import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { theme } from './theme';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Montserrat:wght@700&display=swap');
  
  html {
    scroll-behavior: smooth;
    scroll-padding-top: 80px; /* Account for fixed navbar */
  }
  
  body {
    font-family: ${theme.fonts.main};
    background: ${theme.colors.background};
    color: ${theme.colors.text};
    margin: 0;
    min-height: 100vh;
    overflow-x: hidden; /* Prevent horizontal scroll */
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.fonts.heading};
  }
  
  /* Smooth transitions for all elements */
  * {
    transition: background-color 0.3s ease, color 0.3s ease;
  }
  
  /* Optimize animations for users who prefer reduced motion */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
    
    html {
      scroll-behavior: auto;
    }
  }
  
  /* Ensure sections don't have gaps */
  section {
    margin: 0;
    padding: 0;
  }
`;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
    <App />
    </ThemeProvider>
  </StrictMode>,
)
