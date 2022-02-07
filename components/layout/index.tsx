import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';

export default function Layout() {
  return (
    <Container>
      <Header />
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  margin: 2rem;
`;
