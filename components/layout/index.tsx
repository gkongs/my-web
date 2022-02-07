import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  );
}

const Container = styled.div``;
