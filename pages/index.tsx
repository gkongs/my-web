import styled from 'styled-components';

const Home = () => {
  return (
    <div>
      <Btn>ddd</Btn>
    </div>
  );
};

export default Home;

const Btn = styled.button`
  background-color: ${({ theme }) => theme.primary.main};
`;
