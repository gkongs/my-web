import styled from 'styled-components';
import { FadeIn } from '../styles/animations';

export default function Home() {
  return (
    <Container>
      <FadeIn duration={1}>
        <h1>안녕하세요!</h1>
      </FadeIn>
      <FadeIn duration={1} delay={0.7}>
        <h1>프론트 엔드 개발자 정찬영입니다 🙂</h1>
      </FadeIn>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem 2rem;
  height: 100vh;
  background-color: ${({ theme }) => theme.primary.main};
`;
