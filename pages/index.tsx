import styled from 'styled-components';
import { AnimWrapper } from '../styles/animations';
import { StyledTag } from '../styles/utils';

export default function Home() {
  return (
    <Container>
      <StyledTag type="h1">안녕하세요!</StyledTag>
      <StyledTag type="h1">프론트 엔드 개발자 정찬영입니다 🙂</StyledTag>
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
