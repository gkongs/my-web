import styled from 'styled-components';

export default function Footer() {
  return (
    <Container>
      <h5> Phone: 010 - 3498 - 2902</h5>
      <h5> Email: poiuytasr@gmail.com</h5>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  left: 1rem;
  padding-top: 1rem;
  width: calc(100vw - 2rem);
  border-top: 1px solid black;
`;
