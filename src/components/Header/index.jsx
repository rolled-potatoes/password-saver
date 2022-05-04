import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.5rem;
  font-weight: 900;
  width: 100%;
  text-align: center;
  height: 50px;
  border-bottom: 1px solid #fff;
`;
const StyledHeader = styled.header`
  width: 100vw;
`;

const Header = () => {
  return (
    <StyledHeader>
      <H1>🥔 rolled-password 🥔</H1>
    </StyledHeader>
  );
};

export default Header;
