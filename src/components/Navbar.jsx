// Navbar.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import * as FaIcons from 'react-icons/fa';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  background: rgba(0,0,0,0.6);
  backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4.2rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 3.7rem;
  }
`;

const NavContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
`;

const Logo = styled.a`
  font-size: 2.1rem;
  font-weight: 900;
  color: #ffffff;
  text-decoration: none;
  font-family: 'Montserrat', 'Inter', 'Poppins', 'Roboto', sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.06em;
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const NavLink = styled.li`
  a {
    color: #ffffff;
    font-weight: 600;
    font-size: 1.08rem;
    text-decoration: none;
    padding: 0.2rem 0.7rem;
    border-radius: 0.7rem;
    transition: background 0.18s, color 0.18s;
    &:hover, &:focus {
      background: #FF8E53;
      color: #fff;
      outline: none;
    }
  }
`;

const Hamburger = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 2rem;
  color: #ffffff;
  cursor: pointer;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }
`;

const MobileMenu = styled(motion.ul)`
  position: fixed;
  top: 4.2rem;
  left: 0;
  width: 100vw;
  background: rgba(0,0,0,0.9);
  backdrop-filter: blur(6px);
  list-style: none;
  margin: 0;
  padding: 2rem 0 1.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  z-index: 200;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    top: 3.7rem;
  }
`;

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <Nav>
      <NavContainer>
        <Logo href="#home">Pathum Aththanayake</Logo>
        <NavLinks>
          {navLinks.map(link => (
            <NavLink key={link.href}>
              <a href={link.href}>{link.label}</a>
            </NavLink>
          ))}
        </NavLinks>
        <Hamburger aria-label="Open menu" onClick={() => setOpen(o => !o)}>
          <FaIcons.FaBars />
        </Hamburger>
      </NavContainer>
      <AnimatePresence>
        {open && (
          <MobileMenu
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {navLinks.map(link => (
              <NavLink key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)}>{link.label}</a>
              </NavLink>
            ))}
          </MobileMenu>
        )}
      </AnimatePresence>
    </Nav>
  );
}
