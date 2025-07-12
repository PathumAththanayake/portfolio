import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const TransitionContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const ScrollOverlay = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  height: 200px;
  pointer-events: none;
  z-index: 10;
  transition: opacity 0.3s ease;
  opacity: ${({ isVisible }) => isVisible ? 1 : 0};
  
  ${({ position, from, to, scrollProgress }) => {
    if (position === 'top') {
      return `
        top: 0;
        background: linear-gradient(
          to bottom,
          ${from === 'dark' ? 'rgba(24,24,27,0.98)' : 'rgba(247,248,250,0.98)'} 0%,
          ${from === 'dark' ? 'rgba(24,24,27,0.85)' : 'rgba(247,248,250,0.85)'} ${25 * scrollProgress}%,
          ${from === 'dark' ? 'rgba(24,24,27,0.6)' : 'rgba(247,248,250,0.6)'} ${50 * scrollProgress}%,
          ${from === 'dark' ? 'rgba(24,24,27,0.3)' : 'rgba(247,248,250,0.3)'} ${75 * scrollProgress}%,
          transparent 100%
        );
      `;
    } else {
      return `
        bottom: 0;
        background: linear-gradient(
          to top,
          ${to === 'dark' ? 'rgba(24,24,27,0.98)' : 'rgba(247,248,250,0.98)'} 0%,
          ${to === 'dark' ? 'rgba(24,24,27,0.85)' : 'rgba(247,248,250,0.85)'} ${25 * scrollProgress}%,
          ${to === 'dark' ? 'rgba(24,24,27,0.6)' : 'rgba(247,248,250,0.6)'} ${50 * scrollProgress}%,
          ${to === 'dark' ? 'rgba(24,24,27,0.3)' : 'rgba(247,248,250,0.3)'} ${75 * scrollProgress}%,
          transparent 100%
        );
      `;
    }
  }}
`;

const FloatingParticles = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  height: 100px;
  pointer-events: none;
  z-index: 8;
  opacity: ${({ isVisible }) => isVisible ? 0.3 : 0};
  transition: opacity 0.5s ease;
  
  ${({ position }) => position === 'top' ? 'top: 0;' : 'bottom: 0;'}
  
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: 
      radial-gradient(circle at 20% 50%, rgba(0, 212, 255, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 40% 80%, rgba(255, 107, 107, 0.1) 0%, transparent 50%);
    animation: float 6s ease-in-out infinite;
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0px) scale(1); }
    50% { transform: translateY(-10px) scale(1.05); }
  }
`;

const ScrollTransition = ({ 
  children, 
  from = 'dark', 
  to = 'light', 
  showTopTransition = false, 
  showBottomTransition = false,
  showParticles = false
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Calculate scroll progress (0 to 1)
      const progress = Math.min(scrollY / (documentHeight - windowHeight), 1);
      setScrollProgress(progress);
      
      // Show transitions when section is in view
      const sectionElement = document.querySelector('[data-section]');
      if (sectionElement) {
        const rect = sectionElement.getBoundingClientRect();
        const isInView = rect.top < windowHeight && rect.bottom > 0;
        setIsVisible(isInView);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <TransitionContainer data-section>
      {showTopTransition && (
        <>
          <ScrollOverlay 
            position="top" 
            from={from} 
            to={to} 
            scrollProgress={scrollProgress}
            isVisible={isVisible}
          />
          {showParticles && <FloatingParticles position="top" isVisible={isVisible} />}
        </>
      )}
      
      {children}
      
      {showBottomTransition && (
        <>
          <ScrollOverlay 
            position="bottom" 
            from={from} 
            to={to} 
            scrollProgress={scrollProgress}
            isVisible={isVisible}
          />
          {showParticles && <FloatingParticles position="bottom" isVisible={isVisible} />}
        </>
      )}
    </TransitionContainer>
  );
};

export default ScrollTransition; 