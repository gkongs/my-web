import styled from 'styled-components';

interface StyledTagType {
  type: 'h1' | 'h2' | 'h3' | 'h4';
  children: string;
}

export function StyledTag({ children, type }: StyledTagType): JSX.Element | null {
  switch (type) {
    case 'h1':
      return <H1>{children}</H1>;
    case 'h2':
      return <H2>{children}</H2>;
    case 'h3':
      return <H3>{children}</H3>;
    case 'h4':
      return <H4>{children}</H4>;
    default:
      return null;
  }
}

const H1 = styled.h1`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.black};
  font-weight: bold;
`;

const H2 = styled.h2`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.black};
  font-weight: bold;
`;

const H3 = styled.h3`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.black};
  font-weight: bold;
`;

const H4 = styled.h4`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.black};
  font-weight: bold;
`;
