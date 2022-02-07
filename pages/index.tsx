import styled from 'styled-components';
import Layout from '../components/layout';

function Home() {
  return (
    <div>
      <Layout />
    </div>
  );
}

export default Home;

const Btn = styled.button`
  background-color: ${({ theme }) => theme.primary.main};
`;
