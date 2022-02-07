import React from 'react';
import styled from 'styled-components';
import { StyledTag } from '../../styles/utils';

export default function Header() {
  return (
    <>
      <Container>
        <StyledTag type="h4">Chan Young</StyledTag>
        <StyledTag type="h4">Portfolio</StyledTag>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 1rem;
  left: 1rem;
  width: calc(100vw - 2rem);
`;
