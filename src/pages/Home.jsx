import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { socials } from '../data/socials';
import {
  FaDownload, FaWhatsapp, FaGithub, FaLinkedin, FaFacebook,
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaPython, FaJava,
  FaGitAlt, FaDatabase, FaCloud
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { useMediaQuery } from 'react-responsive';
import profile from '../assets/profile_home.png';
import heroBg from '../assets/hero-bg.jpg';

// Typewriter hook
const roles = ['Frontend Developer', 'UI/UX Designer', 'Mobile App Developer', 'Full Stack Enthusiast'];

const useTypewriter = (words) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index];
    const timeout = setTimeout(() => {
      if (deleting) setText(word.substring(0, text.length - 1));
      else setText(word.substring(0, text.length + 1));

      if (!deleting && text === word) setTimeout(() => setDeleting(true), 1000);
      if (deleting && text === '') {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % words.length);
      }
    }, deleting ? 50 : 150);
    return () => clearTimeout(timeout);
  }, [text, deleting, index, words]);

  return text;
};

// Styled Components
const HeroWrapper = styled.div`
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 2rem;
  background: url(${heroBg}) no-repeat center center/cover;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,0.6);
    z-index: 1;
  }
`;

const HeroContent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
  gap: 4rem;
  z-index: 2;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
  }
`;

const ProfileImg = styled(motion.img)`
  max-height: 70vh;
  width: auto;
  object-fit: cover;
  border: none;
  border-radius: 0;
  box-shadow: 0 0 40px rgba(0,0,0,0.6);
`;

const InfoSide = styled(motion.div)`
  flex: 1;
  color: white;
`;

const Greeting = styled.div`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 0.5rem;
`;

const Name = styled.h1`
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  line-height: 1.2;

  span {
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Role = styled.div`
  font-size: 1.5rem;
  color: rgba(255,255,255,0.9);
  margin-bottom: 1.5rem;
  min-height: 2rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const HeroText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: rgba(255,255,255,0.8);
  margin-bottom: 2rem;
  max-width: 500px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const CTAGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 12px 24px;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;

  ${props => props.primary ? `
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
    color: white;
  ` : `
    background: transparent;
    color: white;
    border: 2px solid rgba(255,255,255,0.3);
  `}

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
  }
`;

const SocialGroup = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialIcon = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.85);
  color: ${({ brand }) => brand || '#7f5af0'};
  text-decoration: none;
  box-shadow: 0 5px 20px rgba(0,0,0,0.2);
  transition: all 0.3s ease;

  &:hover {
    background: white;
    transform: translateY(-3px) scale(1.05);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

const iconFloat = keyframes`
  0%, 100% { transform: translateY(0) rotate(0); }
  50% { transform: translateY(-30px) rotate(180deg); }
`;

const FloatingIcon = styled.div`
  position: absolute;
  color: rgba(255,255,255,0.3);
  font-size: 2rem;
  animation: ${iconFloat} ${props => props.duration}s ease-in-out infinite;
`;

const FloatingIcons = () => (
  <>
    <FloatingIcon style={{top: '8%', left: '5%'}} duration={12}><FaGithub /></FloatingIcon>
    <FloatingIcon style={{top: '20%', right: '10%'}} duration={14}><FaLinkedin /></FloatingIcon>
    <FloatingIcon style={{bottom: '15%', left: '10%'}} duration={11}><FaWhatsapp /></FloatingIcon>
    <FloatingIcon style={{top: '35%', left: '15%'}} duration={13}><FaFacebook /></FloatingIcon>
    <FloatingIcon style={{bottom: '25%', right: '8%'}} duration={15}><HiOutlineMail /></FloatingIcon>
    <FloatingIcon style={{top: '50%', right: '18%'}} duration={10}><FaPython /></FloatingIcon>
    <FloatingIcon style={{top: '65%', left: '20%'}} duration={12}><FaJava /></FloatingIcon>
    <FloatingIcon style={{bottom: '10%', right: '20%'}} duration={9}><FaJs /></FloatingIcon>
    <FloatingIcon style={{top: '70%', right: '5%'}} duration={11}><FaHtml5 /></FloatingIcon>
    <FloatingIcon style={{bottom: '5%', left: '25%'}} duration={13}><FaCss3Alt /></FloatingIcon>
  </>
);

export default function Home() {
  const role = useTypewriter(roles);
  const isTouch = useMediaQuery({ maxWidth: 900 });

  const iconMap = {
    FaWhatsapp, FaGithub, FaLinkedin, FaFacebook, HiOutlineMail,
  };

  const brandColors = {
    WhatsApp: '#25D366',
    GitHub: '#333333',
    LinkedIn: '#0077B5',
    Facebook: '#1877F3',
    Email: '#EA4335',
  };

  return (
    <HeroWrapper id="home">
      <FloatingIcons />
      <HeroContent>
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Tilt tiltEnable={!isTouch} glareEnable={false} scale={1.04} transitionSpeed={1200}>
            <ProfileImg src={profile} alt="Pathum Aththanayake" />
          </Tilt>
        </motion.div>

        <InfoSide
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <Greeting>👾 Turning Ideas Into Interfaces</Greeting>
          <Name>I'm <span>Pathum Aththanayake</span></Name>
          <Role>{role}</Role>
          <HeroText>
            A passionate developer with creative thinking. I love creating sleek designs and the best software out of the box.
          </HeroText>
          <CTAGroup>
            <CTAButton primary href="/assets/CV.pdf" download>
              <FaDownload /> Download CV
            </CTAButton>
            <CTAButton href="#about">About Me</CTAButton>
          </CTAGroup>
          <SocialGroup>
            {socials.map(({ name, icon, url }) => {
              const Icon = iconMap[icon] || HiOutlineMail;
              const brand = brandColors[name] || '#7f5af0';
              return (
                <SocialIcon
                  key={name}
                  href={url}
                  target="_blank"
                  brand={brand}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon />
                </SocialIcon>
              );
            })}
          </SocialGroup>
        </InfoSide>
      </HeroContent>
    </HeroWrapper>
  );
}
