import React from 'react';
import styled from 'styled-components';

const FadeContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const FadeOverlay = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  height: 150px;
  pointer-events: none;
  z-index: 10;
  
  ${({ position, from, to }) => {
    if (position === 'top') {
      return `
        top: 0;
        background: linear-gradient(
          to bottom,
          ${from === 'dark' ? 'rgba(24,24,27,0.98)' : 'rgba(247,248,250,0.98)'} 0%,
          ${from === 'dark' ? 'rgba(24,24,27,0.85)' : 'rgba(247,248,250,0.85)'} 25%,
          ${from === 'dark' ? 'rgba(24,24,27,0.6)' : 'rgba(247,248,250,0.6)'} 50%,
          ${from === 'dark' ? 'rgba(24,24,27,0.3)' : 'rgba(247,248,250,0.3)'} 75%,
          transparent 100%
        );
      `;
    } else {
      return `
        bottom: 0;
        background: linear-gradient(
          to top,
          ${to === 'dark' ? 'rgba(24,24,27,0.98)' : 'rgba(247,248,250,0.98)'} 0%,
          ${to === 'dark' ? 'rgba(24,24,27,0.85)' : 'rgba(247,248,250,0.85)'} 25%,
          ${to === 'dark' ? 'rgba(24,24,27,0.6)' : 'rgba(247,248,250,0.6)'} 50%,
          ${to === 'dark' ? 'rgba(24,24,27,0.3)' : 'rgba(247,248,250,0.3)'} 75%,
          transparent 100%
        );
      `;
    }
  }}
`;

const GlassDivider = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(0, 212, 255, 0.4) 20%,
    rgba(139, 92, 246, 0.5) 40%,
    rgba(255, 107, 107, 0.4) 60%,
    rgba(0, 212, 255, 0.4) 80%,
    transparent 100%
  );
  backdrop-filter: blur(8px);
  z-index: 11;
  box-shadow: 0 0 20px rgba(0, 212, 255, 0.2);
  
  ${({ position }) => position === 'top' ? 'top: 0;' : 'bottom: 0;'}
`;

const BlurOverlay = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  height: 80px;
  backdrop-filter: blur(12px);
  pointer-events: none;
  z-index: 9;
  
  ${({ position }) => position === 'top' ? 'top: 0;' : 'bottom: 0;'}
`;

const GradientAccent = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(
    90deg,
    #00D4FF 0%,
    #8B5CF6 25%,
    #FF6B6B 50%,
    #8B5CF6 75%,
    #00D4FF 100%
  );
  opacity: 0.6;
  z-index: 12;
  
  ${({ position }) => position === 'top' ? 'top: 0;' : 'bottom: 0;'}
`;

const SectionFade = ({ 
  children, 
  from = 'dark', 
  to = 'light', 
  showTopFade = false, 
  showBottomFade = false,
  showGlassDivider = false,
  showBlurOverlay = false,
  showGradientAccent = false
}) => {
  return (
    <FadeContainer>
      {showTopFade && (
        <>
          <FadeOverlay position="top" from={from} to={to} />
          {showBlurOverlay && <BlurOverlay position="top" />}
          {showGlassDivider && <GlassDivider position="top" />}
          {showGradientAccent && <GradientAccent position="top" />}
        </>
      )}
      
      {children}
      
      {showBottomFade && (
        <>
          <FadeOverlay position="bottom" from={from} to={to} />
          {showBlurOverlay && <BlurOverlay position="bottom" />}
          {showGlassDivider && <GlassDivider position="bottom" />}
          {showGradientAccent && <GradientAccent position="bottom" />}
        </>
      )}
    </FadeContainer>
  );
};

export default SectionFade; 