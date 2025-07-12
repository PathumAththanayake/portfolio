// Framer Motion animation variants for scroll-triggered and micro-interactions
export const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' }
  }
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: 'easeOut' }
  }
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: 'easeOut' }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 }
  }
};

export const staggerTags = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.3 }
  }
};

export const tagSpring = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 320, damping: 22 }
  }
};

export const buttonHover = {
  hover: {
    scale: 1.07,
    boxShadow: '0 0 16px #2979FF88',
    transition: { duration: 0.18 }
  }
};

export const cardHover = {
  hover: {
    scale: 1.03,
    boxShadow: '0 8px 32px rgba(60,72,100,0.18)',
    transition: { duration: 0.18 }
  }
}; 