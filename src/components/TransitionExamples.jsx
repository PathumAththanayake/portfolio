import React from 'react';
import SectionFade from './SectionFade';
import ScrollTransition from './ScrollTransition';

// Example usage of SectionFade component
export const SectionFadeExamples = () => {
  return (
    <div>
      {/* Basic fade transition from dark to light */}
      <SectionFade from="dark" to="light" showBottomFade={true}>
        <div style={{ background: '#18181B', color: 'white', padding: '100px 20px' }}>
          Dark Section
        </div>
      </SectionFade>
      
      {/* Enhanced fade with glass divider and gradient accent */}
      <SectionFade 
        from="light" 
        to="dark" 
        showTopFade={true} 
        showBottomFade={true} 
        showGlassDivider={true}
        showGradientAccent={true}
      >
        <div style={{ background: '#F7F8FA', color: '#18181B', padding: '100px 20px' }}>
          Light Section with Enhanced Transitions
        </div>
      </SectionFade>
      
      {/* Same theme transition with blur overlay */}
      <SectionFade 
        from="dark" 
        to="dark" 
        showTopFade={true} 
        showBottomFade={true}
        showBlurOverlay={true}
        showGlassDivider={true}
      >
        <div style={{ background: '#18181B', color: 'white', padding: '100px 20px' }}>
          Dark Section with Blur Overlay
        </div>
      </SectionFade>
    </div>
  );
};

// Example usage of ScrollTransition component
export const ScrollTransitionExamples = () => {
  return (
    <div>
      {/* Scroll-based transition with particles */}
      <ScrollTransition 
        from="dark" 
        to="light" 
        showBottomTransition={true}
        showParticles={true}
      >
        <div style={{ background: '#18181B', color: 'white', padding: '100px 20px' }}>
          Dark Section with Scroll-Based Transition
        </div>
      </ScrollTransition>
      
      {/* Enhanced scroll transition */}
      <ScrollTransition 
        from="light" 
        to="dark" 
        showTopTransition={true}
        showBottomTransition={true}
        showParticles={true}
      >
        <div style={{ background: '#F7F8FA', color: '#18181B', padding: '100px 20px' }}>
          Light Section with Full Scroll Transitions
        </div>
      </ScrollTransition>
    </div>
  );
};

// Complete portfolio section example
export const PortfolioSectionExample = () => {
  return (
    <div>
      {/* Home Section - Dark theme */}
      <SectionFade from="dark" to="dark" showBottomFade={true} showGlassDivider={true} showGradientAccent={true}>
        <div style={{ 
          background: 'linear-gradient(135deg, #18181B 0%, #23223B 100%)', 
          color: 'white', 
          padding: '100px 20px',
          minHeight: '100vh'
        }}>
          <h1>Home Section</h1>
          <p>Dark themed hero section with smooth bottom transition</p>
        </div>
      </SectionFade>
      
      {/* Skills Section - Dark to Light transition */}
      <SectionFade 
        from="dark" 
        to="light" 
        showTopFade={true} 
        showBottomFade={true} 
        showGlassDivider={true} 
        showGradientAccent={true}
      >
        <div style={{ 
          background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)', 
          color: 'white', 
          padding: '100px 20px',
          minHeight: '100vh'
        }}>
          <h1>Skills Section</h1>
          <p>Dark themed skills with smooth transitions to light theme</p>
        </div>
      </SectionFade>
      
      {/* About Section - Light theme */}
      <SectionFade 
        from="light" 
        to="light" 
        showTopFade={true} 
        showBottomFade={true} 
        showGlassDivider={true} 
        showGradientAccent={true}
      >
        <div style={{ 
          background: 'linear-gradient(135deg, #F7F8FA 0%, #E3F0FF 100%)', 
          color: '#18181B', 
          padding: '100px 20px',
          minHeight: '100vh'
        }}>
          <h1>About Section</h1>
          <p>Light themed about section with profile photo</p>
        </div>
      </SectionFade>
      
      {/* Projects Section - Light to Dark transition */}
      <SectionFade 
        from="light" 
        to="dark" 
        showTopFade={true} 
        showBottomFade={true} 
        showGlassDivider={true} 
        showGradientAccent={true}
      >
        <div style={{ 
          background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)', 
          color: '#18181B', 
          padding: '100px 20px',
          minHeight: '100vh'
        }}>
          <h1>Projects Section</h1>
          <p>Light themed projects with smooth transition to dark</p>
        </div>
      </SectionFade>
      
      {/* Contact Section - Dark theme */}
      <SectionFade from="dark" to="dark" showTopFade={true} showGradientAccent={true}>
        <div style={{ 
          background: 'linear-gradient(135deg, #18181B 0%, #23223B 100%)', 
          color: 'white', 
          padding: '100px 20px',
          minHeight: '100vh'
        }}>
          <h1>Contact Section</h1>
          <p>Dark themed contact section</p>
        </div>
      </SectionFade>
    </div>
  );
};

export default {
  SectionFadeExamples,
  ScrollTransitionExamples,
  PortfolioSectionExample
}; 