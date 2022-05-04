import React from 'react';
import Header from 'components/Header';
import Aside from 'components/Aside';
import styled from 'styled-components';
import { background } from '../styles/color';

const LayoutContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 50px);
  background-color: ${background};

  grid-template-areas:
    'hd hd hd hd hd hd'
    'sd main main main main main';

  header {
    grid-area: hd;
  }
  aside {
    grid-area: sd;
  }
  main {
    grid-area: main;
  }
`;
const Default = ({ children }) => {
  return (
    <LayoutContainer>
      <Header />
      <Aside />
      {children}
    </LayoutContainer>
  );
};

export default Default;
