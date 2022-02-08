import React from 'react';
import styled from 'styled-components';

export default function Header() {
  return (
    <>
      <Container>
        <h4>Chan Young</h4>
        <h4>Portfolio</h4>
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
