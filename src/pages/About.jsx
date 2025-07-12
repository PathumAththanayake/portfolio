import React, { useCallback } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import profile from "../assets/profile.jpg";
import bgAbout from "../assets/bg-about.jpg";
import { FaDownload, FaPhone } from "react-icons/fa";

const ParticlesContainer = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
`;

const AboutSection = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 0 4rem 0;
  background: url(${bgAbout}) center center / cover no-repeat;
  overflow: hidden;
`;

const AboutContainer = styled(motion.div)`
  width: 100%;
  max-width: 1100px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  z-index: 1;
  position: relative;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    gap: 2rem;
    padding: 0 1rem;
  }
`;

const Left = styled(motion.div)`
  flex: 1.1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProfileImg = styled(motion.img)`
  width: 420px;
  height: 520px;
  border-radius: 2rem;
  object-fit: cover;
  box-shadow: 0 8px 32px rgba(0,0,0,0.3);
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05) rotate(2deg);
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 240px;
    height: 300px;
    border-radius: 1.2rem;
  }
`;

const Right = styled(motion.div)`
  flex: 1.3;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

const TextCard = styled(motion.div)`
  background: rgba(0,0,0,0.4);
  border-radius: 1.8rem;
  box-shadow: 0 4px 32px rgba(0,0,0,0.4);
  padding: 2rem 2rem;
  max-width: 500px;
  backdrop-filter: blur(12px);
  color: #f0f0f0;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 1.5rem 1rem;
    text-align: center;
  }
`;

const AboutTitle = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 1rem;
`;

const AboutDesc = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 2rem;
`;

const DownloadButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  padding: 1rem 2rem;
  border-radius: 999px;
  font-weight: 700;
  font-size: 1.08rem;
  background: linear-gradient(90deg, #667eea, #764ba2);
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background: linear-gradient(90deg, #764ba2, #667eea);
    transform: scale(1.07);
  }
`;

const BlurredBg = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  background: url(${bgAbout}) center center / cover no-repeat;
  filter: blur(3px); /* Subtle blur, about 15% visually */
  pointer-events: none;
`;

export default function About() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  // State for Contact Me button
  const [showNumber, setShowNumber] = React.useState(false);
  const [showCallIcon, setShowCallIcon] = React.useState(false);

  const handleContactClick = () => {
    if (!showNumber) {
      setShowNumber(true);
      setTimeout(() => setShowCallIcon(true), 600); // Show icon after 0.6s
    }
  };

  return (
    <AboutSection id="about">
      <BlurredBg />
      <ParticlesContainer>
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            fullScreen: false,
            background: { color: "transparent" },
            fpsLimit: 60,
            particles: {
              number: { value: 50, density: { enable: true, area: 800 } },
              color: { value: "#ffffff" },
              shape: { type: "circle" },
              opacity: { value: 0.5 },
              size: { value: 3, random: true },
              move: {
                enable: true,
                speed: 1.5,
                direction: "none",
                random: false,
                straight: false,
                outMode: "out"
              }
            },
            interactivity: {
              detectsOn: "canvas",
              events: {
                onHover: { enable: true, mode: "repulse" },
                onClick: { enable: true, mode: "push" }
              },
              modes: {
                repulse: { distance: 80 },
                push: { quantity: 4 }
              }
            },
            detectRetina: true
          }}
        />
      </ParticlesContainer>
      <AboutContainer
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Left>
          <ProfileImg
            src={profile}
            alt="Pathum Aththanayake"
            initial={{ scale: 1.1, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          />
        </Left>
        <Right>
          <TextCard>
            <AboutTitle>This is Me! Pathum Aththanayake</AboutTitle>
            <AboutDesc>
              I'm Pathum Aththanayake, an undergraduate student at the Sri Lanka Institute of Information Technology (SLIIT), pursuing a Bachelor of Science Honours in Information Technology. I am a skilled frontend developer, web developer, UI/UX designer, full stack developer, and mobile app developer. I am passionate about creating innovative software solutions and designing engaging user experiences. Thank you for visiting my portfolio.
            </AboutDesc>
            <DownloadButton
              as="button"
              type="button"
              onClick={handleContactClick}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.97 }}
            >
              {showNumber ? (
                <>
                  0783448183
                  {showCallIcon && (
                    <FaPhone style={{ marginLeft: '0.7rem', fontSize: '1.2em' }} />
                  )}
                </>
              ) : (
                "Contact Me"
              )}
            </DownloadButton>
          </TextCard>
        </Right>
      </AboutContainer>
    </AboutSection>
  );
}
