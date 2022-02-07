import { css, keyframes } from 'styled-components';

export const fadeIn = keyframes`
   from {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }
    to {
      opacity: 1;
      transform: translateZ(0);
    }
`;

export const fadeInAnim = css`
  animation: ${fadeIn} 1s;
`;
