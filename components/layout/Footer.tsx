import styled from 'styled-components';
import { StyledTag } from '../../styles/utils';

export default function Footer() {
  return (
    <Container>
      <StyledTag type="h5"> Phone: 010 - 3498 - 2902</StyledTag>
      <StyledTag type="h5"> Email: poiuytasr@gmail.com</StyledTag>
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
