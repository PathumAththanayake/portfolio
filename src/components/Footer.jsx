// Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterSection = styled.footer`
  width: 100%;
  padding: 2.5rem 0 2rem 0;
  background: rgba(0,0,0,0.75);
  backdrop-filter: blur(6px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.7rem;
  margin-top: auto;
  border-top: 1px solid rgba(255,255,255,0.1);
`;

const Copyright = styled.div`
  font-size: 0.95rem;
  color: #f0f0f0;
  text-align: center;
  font-weight: 500;
  letter-spacing: 0.03em;
`;

const Links = styled.div`
  display: flex;
  gap: 1.2rem;
  margin-top: 0.5rem;
`;

const FooterLink = styled.a`
  color: #FF8E53;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s;
  &:hover {
    color: #fff;
  }
`;

export default function Footer() {
  return (
    <FooterSection>
      
      <Copyright>
        © {new Date().getFullYear()} Pathum Aththanayake. All rights reserved.
      </Copyright>
    </FooterSection>
  );
}
