import React from 'react';
import styled, { keyframes } from 'styled-components';
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';

const DecorativeLeaves = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 420px;
  max-width: 60vw;
  opacity: 0.22;
  filter: blur(2px) saturate(1.2);
  pointer-events: none;
  z-index: 0;
  @media (max-width: 900px) {
    width: 220px;
    max-width: 80vw;
  }
`;

const MeshBg = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  background: radial-gradient(ellipse 80% 60% at 20% 30%, #23223B 0%, #3B82F6 60%, transparent 100%),
              radial-gradient(ellipse 60% 40% at 80% 70%, #8B5CF6 0%, #18181B 60%, transparent 100%),
              radial-gradient(ellipse 40% 30% at 60% 20%, #FF6B6B 0%, #FF8E53 60%, transparent 100%);
  opacity: 0.7;
  pointer-events: none;
`;

const Glow = styled.div`
  position: absolute;
  z-index: 1;
  width: 180px;
  height: 180px;
  background: radial-gradient(circle, #FF8E53 0%, transparent 80%);
  opacity: 0.13;
  filter: blur(24px);
  pointer-events: none;
`;

const Section = styled.section`
  width: 100%;
  padding: 5rem 0;
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  position: relative;
  overflow: hidden;
`;
const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1rem;
`;
const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  margin-bottom: 2.5rem;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
const Card = styled.div`
  background: none;
  border-radius: 1.5rem;
  box-shadow: 0 4px 16px ${({ theme }) => theme.colors.shadow};
  padding: 1.5rem 1rem 2rem 1rem;
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.3s cubic-bezier(.4,1,.6,1), transform 0.3s cubic-bezier(.4,1,.6,1);
  border: 1.5px solid ${({ theme }) => theme.colors.border};
  will-change: box-shadow, transform;
  &:hover {
    box-shadow: 0 8px 32px #13547a44, 0 2px 8px #80d0c744;
    transform: scale(1.06) rotate(-1.5deg);
  }
`;
const Badge = styled.span`
  display: inline-block;
  background: none;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.3rem 1rem;
  border-radius: 999px;
  margin-bottom: 0.7rem;
  box-shadow: none;
`;
const ImageWrapper = styled.div`
  width: 100%;
  height: 10rem;
  background: none;
  border-radius: 1rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;
const ProjectImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const ProjectTitle = styled.div`
  font-weight: 700;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.5rem;
`;
const ProjectDesc = styled.div`
  color: #222;
  font-size: 1rem;
  margin-bottom: 1.2rem;
  flex: 1;
`;
const ButtonGroup = styled.div`
  display: flex;
  gap: 0.7rem;
`;
const ProjectButton = styled.a`
  padding: 0.5rem 1.2rem;
  border-radius: 999px;
  font-weight: 600;
  font-size: 0.95rem;
  background: none;
  color: ${({ theme }) => theme.colors.primary};
  border: 1.5px solid ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  box-shadow: none;
  transition: all 0.2s;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
  }
`;

// Animated grid
const GridBg = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background: repeating-linear-gradient(0deg, #fff2 0 1px, transparent 1px 40px),
              repeating-linear-gradient(90deg, #fff2 0 1px, transparent 1px 40px);
  opacity: 0.06;
  animation: gridMove 8s linear infinite alternate;
  will-change: background-position;
  @media (prefers-reduced-motion: reduce) { animation: none; }
`;
const gridMove = keyframes`
  0%   { background-position: 0 0; }
  100% { background-position: 40px 40px; }
`;
// Floating geometric shape
const FloatingSquare = styled.div`
  position: absolute;
  z-index: 0;
  opacity: 0.10;
  pointer-events: none;
  width: 80px;
  height: 80px;
  background: #fff4;
  border-radius: 1.2rem;
  animation: floatShape 7s ease-in-out infinite alternate;
  will-change: transform, opacity;
  @media (prefers-reduced-motion: reduce) { animation: none; }
`;
const FloatingTriangle = styled.div`
  position: absolute;
  z-index: 0;
  opacity: 0.10;
  pointer-events: none;
  width: 70px;
  height: 70px;
  background: none;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  background: #ffecd244;
  animation: floatShape 8s ease-in-out infinite alternate;
  will-change: transform, opacity;
  @media (prefers-reduced-motion: reduce) { animation: none; }
`;
const floatShape = keyframes`
  0% { transform: translate3d(0,0,0) scale(1); }
  100% { transform: translate3d(0,-30px,0) scale(1.08); }
`;

const iconMap = { ...FaIcons, ...SiIcons };

export default function Projects() {
  const projects = [
    {
      title: 'Smart Presentation Scheduling System – AutoShed',
      description: 'Designed and implemented Admin module with CRUD operations. Integrated scheduling with real-time conflict validation. Automated availability forms and email notifications.',
      category: 'Full Stack',
      technologies: 'React.js, Node.js, MySQL, Express',
      projectIcon: 'FaCalendarAlt',
      thumbBg: 'linear-gradient(135deg, #7f5af0 0%, #2cb67d 100%)',
      iconColor: '#fff',
    },
    {
      title: 'Interior Design Learning System – Growthive Project',
      description: 'Developed CRUD for learning plans. Created quiz creation and sharing modules. Integrated frontend with Spring Boot APIs.',
      category: 'Full Stack',
      technologies: 'Spring Boot, Java, React.js, CSS, MySQL',
      projectIcon: 'FaChalkboardTeacher',
      thumbBg: 'linear-gradient(135deg, #ffb300 0%, #ff5252 100%)',
      iconColor: '#fff',
    },
    {
      title: 'Prison Management System – Maintenance Management Module',
      description: 'Developed dashboards for maintenance task tracking. Created form submissions and MongoDB backend integration.',
      category: 'Full Stack',
      technologies: 'MERN Stack (MongoDB, Express, React, Node)',
      projectIcon: 'FaTools',
      thumbBg: 'linear-gradient(135deg, #00bfa5 0%, #2979ff 100%)',
      iconColor: '#fff',
    },
    {
      title: 'Online Car Rental System (1st Year Group Project)',
      description: 'UI for vehicle listings and booking process. Form validation and PHP backend. Admin panel for managing rentals.',
      category: 'Web',
      technologies: 'HTML, CSS, PHP, XAMPP',
      projectIcon: 'FaCar',
      thumbBg: 'linear-gradient(135deg, #ff4081 0%, #8d6e63 100%)',
      iconColor: '#fff',
    },
    {
      title: 'Online Event Planning System (2nd Year Group Project)',
      description: 'Built event scheduling and calendar forms. User login, registration, and dashboard.',
      category: 'Web',
      technologies: 'Java, HTML, CSS, Eclipse, MySQL',
      projectIcon: 'FaCalendarCheck',
      thumbBg: 'linear-gradient(135deg, #ffd600 0%, #2979ff 100%)',
      iconColor: '#23223B',
    },
    {
      title: 'Travel Planner Mobile App – Ceylon Explorer (In Progress)',
      description: 'Province-wise filtering and offline location management. User trip planning and navigation flow.',
      category: 'Mobile',
      technologies: 'Dart, Flutter',
      projectIcon: 'FaMapMarkedAlt',
      thumbBg: 'linear-gradient(135deg, #00b8d9 0%, #ffb300 100%)',
      iconColor: '#fff',
    },
    {
      title: 'Mobile Travel App (2nd Year Individual Project)',
      description: 'Developed simple destination explorer app with filters.',
      category: 'Mobile',
      technologies: 'Kotlin, Android Studio',
      projectIcon: 'FaMobileAlt',
      thumbBg: 'linear-gradient(135deg, #ff6f00 0%, #00bfa5 100%)',
      iconColor: '#fff',
    },
    {
      title: 'Mobile Car Game App (2nd Year Individual Project)',
      description: 'Created interactive 2D car racing game.',
      category: 'Mobile',
      technologies: 'Kotlin, Android Studio',
      projectIcon: 'FaGamepad',
      thumbBg: 'linear-gradient(135deg, #ff5252 0%, #607d8b 100%)',
      iconColor: '#fff',
    },
    {
      title: 'E-Commerce Website for Sarees-www.liyasarees.com',
      description: 'Built and deployed a saree selling website. Integrated product pages and user-friendly navigation.',
      category: 'Web',
      technologies: 'WordPress, CSS',
      projectIcon: 'FaShoppingBag',
      thumbBg: 'linear-gradient(135deg, #2cb67d 0%, #7f5af0 100%)',
      iconColor: '#fff',
    },
  ];

  // Styled icon thumbnail for project
  const ProjectThumb = styled.div`
    width: 5.5rem;
    height: 5.5rem;
    border-radius: 1.2rem;
    background: ${({ thumbBg }) => thumbBg || 'linear-gradient(135deg, #7f5af0 60%, #2cb67d 100%)'};
    color: ${({ iconColor }) => iconColor || '#fff'};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.7rem;
    margin: 0 auto 1.1rem auto;
    box-shadow: 0 2px 12px ${({ theme }) => theme.colors.shadow};
    position: relative;
    overflow: hidden;
  `;

  return (
    <Section id="projects">
      <GridBg style={{ animation: 'gridMove 8s linear infinite alternate' }} />
      <FloatingSquare style={{top: '12%', left: '60%'}} />
      <FloatingTriangle style={{bottom: '10%', right: '12%'}} />
      <Container>
        <Title>Projects</Title>
        <Grid>
          {projects.map((project) => {
            const Icon = iconMap[project.projectIcon];
            return (
              <Card key={project.title}>
                <ImageWrapper>
                  {Icon && <ProjectThumb thumbBg={project.thumbBg} iconColor={project.iconColor}><Icon /></ProjectThumb>}
                </ImageWrapper>
                <Badge>{project.category}</Badge>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDesc>{project.description}</ProjectDesc>
                <div style={{ fontSize: '0.9rem', color: '#555', marginBottom: 8 }}>{project.technologies}</div>
                <ButtonGroup>
                  {project.live && (
                    <ProjectButton href={project.live} target="_blank" rel="noopener noreferrer">Live</ProjectButton>
                  )}
                  {project.source && (
                    <ProjectButton href={project.source} target="_blank" rel="noopener noreferrer">Source</ProjectButton>
                  )}
                </ButtonGroup>
              </Card>
            );
          })}
        </Grid>
      </Container>
    </Section>
  );
} 