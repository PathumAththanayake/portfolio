import React, { useState } from 'react';
import styled from 'styled-components';
import { socials } from '../data/socials';
import * as FaIcons from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import crumpledPaper from '../assets/crumpled-paper.jpg';

const iconMap = { ...FaIcons, HiOutlineMail };

const Section = styled.section`
  width: 100%;
  padding: 5rem 0;
  background: url(${crumpledPaper}) no-repeat center center fixed;
  background-size: cover;
  position: relative;
  overflow: hidden;
`;

const GlassOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.45);
  backdrop-filter: blur(4px);
  z-index: 0;
`;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 1rem;
  position: relative;
  z-index: 1;
  box-sizing: border-box;
`;

const Title = styled.h2`
  font-size: 2.2rem;
  font-weight: 800;
  color: #f0f0f0;
  text-align: center;
  margin-bottom: 2.5rem;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
  justify-content: center;
  width: 100%;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
  }
`;

const Form = styled.form`
  flex: 1;
  width: 100%;
  max-width: 420px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 1rem;
  padding: 2rem 1.5rem;
  box-shadow: 0 6px 24px rgba(0,0,0,0.4);
  backdrop-filter: blur(4px);
  box-sizing: border-box;
`;

const Label = styled.label`
  display: block;
  color: #f0f0f0;
  font-weight: 600;
  margin-bottom: 0.4rem;
`;

const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 0.75rem 1rem;
  border-radius: 0.6rem;
  border: 1.5px solid #ccc;
  margin-bottom: 1.2rem;
  font-size: 1rem;
  color: #f0f0f0;
  background: rgba(255,255,255,0.08);
  backdrop-filter: blur(2px);
  transition: border 0.2s, box-shadow 0.2s;
  &::placeholder {
    color: #bbb;
  }
  &:focus {
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.accentAlt};
    outline: none;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  box-sizing: border-box;
  padding: 0.75rem 1rem;
  border-radius: 0.6rem;
  border: 1.5px solid #ccc;
  margin-bottom: 1.2rem;
  font-size: 1rem;
  color: #f0f0f0;
  background: rgba(255,255,255,0.08);
  backdrop-filter: blur(2px);
  transition: border 0.2s, box-shadow 0.2s;
  resize: vertical;
  min-height: 110px;
  &::placeholder {
    color: #bbb;
  }
  &:focus {
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.accentAlt};
    outline: none;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 0.85rem 0;
  border-radius: 999px;
  font-weight: 700;
  font-size: 1.1rem;
  background: linear-gradient(90deg, ${({ theme }) => theme.colors.primaryAlt}, ${({ theme }) => theme.colors.accent});
  color: #18181B;
  border: none;
  box-shadow: 0 2px 8px ${({ theme }) => theme.colors.shadow};
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background: linear-gradient(90deg, ${({ theme }) => theme.colors.accent}, ${({ theme }) => theme.colors.primaryAlt});
  }
`;

const Info = styled.div`
  flex: 1;
  width: 100%;
  max-width: 420px;
  color: #f0f0f0;
  background: rgba(255,255,255,0.05);
  border-radius: 1rem;
  box-shadow: 0 6px 24px rgba(0,0,0,0.4);
  backdrop-filter: blur(4px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
  font-size: 1.1rem;
  text-align: center;
  padding: 2rem 1.5rem;
  box-sizing: border-box;
`;

const InfoLink = styled.a`
  color: ${({ theme }) => theme.colors.accent};
  text-decoration: underline;
  font-weight: 600;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const SocialGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialIcon = styled.a`
  font-size: 2rem;
  border-radius: 50%;
  padding: 0.5rem;
  background: rgba(255,255,255,0.1);
  color: #f0f0f0;
  transition: all 0.2s;
  &:hover {
    background: ${({ theme }) => theme.colors.accent};
    color: #fff;
  }
`;

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2000);
  };

  return (
    <Section id="contact">
      <GlassOverlay />
      <Container>
        <Title>Get in Touch</Title>
        <Flex>
          <Form onSubmit={handleSubmit}>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              required
            />
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              required
            />
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Write your message..."
              value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })}
              required
            />
            <SubmitButton type="submit" disabled={submitted}>
              {submitted ? 'Sent!' : 'Send Message'}
            </SubmitButton>
          </Form>
          <Info>
            <div style={{ fontWeight: 700, fontSize: '1.2rem' }}>Let's Connect!</div>
            <div>Feel free to reach out for collaborations, project inquiries, or just to say hello.</div>
            <InfoLink href="mailto:mayurapathum047@gmail.com">mayurapathum047@gmail.com</InfoLink>
            <SocialGroup>
              {socials.map((social) => {
                const Icon = iconMap[social.icon];
                return (
                  <SocialIcon key={social.label} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                    {Icon && <Icon />}
                  </SocialIcon>
                );
              })}
            </SocialGroup>
          </Info>
        </Flex>
      </Container>
    </Section>
  );
}
