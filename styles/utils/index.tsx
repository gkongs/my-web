import styled, { CSSProperties } from 'styled-components';

interface StyledTagType {
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
  children: string;
  style?: CSSProperties;
}

export function StyledTag({ type, style, children }: StyledTagType): JSX.Element | null {
  switch (type) {
    case 'h1':
      return <H1 style={style}>{children}</H1>;
    case 'h2':
      return <H2 style={style}>{children}</H2>;
    case 'h3':
      return <H3 style={style}>{children}</H3>;
    case 'h4':
      return <H4 style={style}>{children}</H4>;
    case 'h5':
      return <H5 style={style}>{children}</H5>;
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

const H5 = styled.h5`
  font-size: 1rem;
  color: ${({ theme }) => theme.black};
  font-weight: bold;
`;
