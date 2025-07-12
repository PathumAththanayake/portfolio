import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import vsCodeLogo from "../assets/vscode.png";

const iconMap = { ...FaIcons, ...SiIcons };

// Categorized Skills
const skillCategories = [
  {
    label: "Frontend",
    skills: [
      { name: "React.js", icon: "FaReact", proficiency: 90 },
      { name: "HTML5", icon: "FaHtml5", proficiency: 95 },
      { name: "CSS3", icon: "FaCss3Alt", proficiency: 92 },
      { name: "JavaScript", icon: "FaJs", proficiency: 90 },
      { name: "Bootstrap", icon: "FaBootstrap", proficiency: 85 },
      { name: "Tailwind CSS", icon: "SiTailwindcss", proficiency: 80 },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Node.js", icon: "FaNodeJs", proficiency: 80 },
      { name: "Express.js", icon: "SiExpress", proficiency: 78 },
      { name: "Spring Boot", icon: "SiSpring", proficiency: 75 },
      { name: "Java", icon: "FaJava", proficiency: 85 },
      { name: "Kotlin", icon: "SiKotlin", proficiency: 75 },
      { name: "Flutter", icon: "SiFlutter", proficiency: 70 },
    ],
  },
  {
    label: "Database",
    skills: [
      { name: "MySQL", icon: "FaDatabase", proficiency: 85 },
      { name: "MongoDB", icon: "SiMongodb", proficiency: 80 },
      { name: "Firebase", icon: "SiFirebase", proficiency: 75 },
    ],
  },
  {
    label: "Tools",
    skills: [
      { name: "Git", icon: "FaGitAlt", proficiency: 90 },
      { name: "GitHub", icon: "FaGithub", proficiency: 90 },
      { name: "Postman", icon: "SiPostman", proficiency: 80 },
      { name: "VS Code", icon: "SiVisualstudiocode", proficiency: 90 },
      { name: "Eclipse", icon: "SiEclipseide", proficiency: 80 },
      { name: "Android Studio", icon: "SiAndroidstudio", proficiency: 75 },
      { name: "Netlify", icon: "SiNetlify", proficiency: 80 },
    ],
  },
  {
    label: "Design",
    skills: [
      { name: "Figma", icon: "FaFigma", proficiency: 85 },
      { name: "Adobe XD", icon: "SiAdobexd", proficiency: 75 },
    ],
  },
];

// Colors for icons
const iconColors = {
  FaReact: "#61DAFB",
  FaHtml5: "#E34F26",
  FaCss3Alt: "#1572B6",
  FaJs: "#F7DF1E",
  FaBootstrap: "#7952B3",
  SiTailwindcss: "#38BDF8",
  FaNodeJs: "#339933",
  SiExpress: "#000000",
  SiSpring: "#6DB33F",
  FaJava: "#007396",
  SiKotlin: "#7F52FF",
  SiFlutter: "#02569B",
  FaDatabase: "#4DB33D",
  SiMongodb: "#47A248",
  SiFirebase: "#FFCA28",
  FaGitAlt: "#F05032",
  FaGithub: "#181717",
  SiPostman: "#FF6C37",
  SiVisualstudiocode: "#007ACC",
  SiEclipseide: "#2C2255",
  SiAndroidstudio: "#3DDC84",
  SiNetlify: "#00C7B7",
  FaFigma: "#F24E1E",
  SiAdobexd: "#FF61F6",
};

const Section = styled.section`
  width: 100%;
  padding: 5rem 0;
  background:
    linear-gradient(135deg, #0f2027, #203a43, #2c5364),
    url("data:image/svg+xml;utf8,<svg opacity='0.03' width='40' height='40' xmlns='http://www.w3.org/2000/svg'><rect width='40' height='40' fill='none' stroke='%23ffffff' stroke-width='1' /></svg>");
  background-size: cover, 40px 40px;
  position: relative;
  overflow: hidden;
`;
const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1rem;
  position: relative;
  z-index: 2;
`;
const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #00fff7;
  text-align: center;
  margin-bottom: 2.5rem;
`;
const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 2rem;
`;
const Card = styled(motion.div)`
  background: rgba(0, 0, 0, 0.6);
  border-radius: 1.2rem;
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid ${({ color }) => color};
  transition: all 0.3s;
  &:hover {
    transform: scale(1.08);
    box-shadow: 0 0 20px ${({ color }) => color};
    border-color: #00fff7;
  }
`;
const IconCircle = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.2rem;
  color: ${({ color }) => color};
  margin-bottom: 0.5rem;
  border: 3px solid ${({ color }) => color};
`;
const SkillName = styled.div`
  font-weight: 600;
  margin-bottom: 0.3rem;
  color: #fff;
`;
const BarBg = styled.div`
  width: 100%;
  height: 0.5rem;
  background: #333;
  border-radius: 1rem;
  overflow: hidden;
  margin-bottom: 0.3rem;
`;
const Bar = styled.div`
  height: 100%;
  background: ${({ color }) => color};
  width: ${({ width }) => width}%;
  transition: width 1s ease;
`;
const Percent = styled.div`
  font-size: 0.8rem;
  color: #ccc;
`;
const CategoryGroup = styled(motion.div)`
  background: rgba(0, 0, 0, 0.5);
  border-radius: 1rem;
  padding: 2rem;
  margin-bottom: 2rem;
`;
const CategoryTitle = styled.h3`
  color: #00fff7;
  margin-bottom: 1rem;
  font-size: 1.2rem;
`;

export default function Skills() {
  return (
    <Section id="skills">
      <Container>
        <Title
          as={motion.h2}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Skills
        </Title>
        {skillCategories.map((cat, idx) => (
          <CategoryGroup
            key={cat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
            <CategoryTitle>{cat.label}</CategoryTitle>
            <SkillsGrid>
              {cat.skills.map(({ name, icon, proficiency }) => {
                const Icon = iconMap[icon];
                const color = iconColors[icon];
                return (
                  <Card key={name} color={color}>
                    <IconCircle color={color}>
                      {icon === "SiVisualstudiocode" && !Icon ? (
                        <img
                          src={vsCodeLogo}
                          alt="VS Code"
                          style={{
                            width: "2.2rem",
                            height: "2.2rem",
                            borderRadius: "50%",
                          }}
                        />
                      ) : (
                        Icon && <Icon />
                      )}
                    </IconCircle>
                    <SkillName>{name}</SkillName>
                    <BarBg>
                      <Bar width={proficiency} color={color} />
                    </BarBg>
                    <Percent>{proficiency}%</Percent>
                  </Card>
                );
              })}
            </SkillsGrid>
          </CategoryGroup>
        ))}
      </Container>
    </Section>
  );
}
