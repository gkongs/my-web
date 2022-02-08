import React from 'react';
import styled, { keyframes } from 'styled-components';

// Fade In

interface FadeInProps {
  delay?: number;
  duration?: number;
  children: React.ReactNode;
}

interface FadeInContainerProps {
  delay?: number;
  duration?: number;
}

export function FadeIn({ duration, delay, children }: FadeInProps) {
  return (
    <FadeInWrapper duration={duration} delay={delay}>
      {children}
    </FadeInWrapper>
  );
}

export const fadeinAnim = keyframes`
   from {
      opacity: 0;
      transform: translateY(100%)
      
    }
    to {
      opacity: 1;
      transform: translateZ(0);
    }
`;

export const FadeInWrapper = styled.div<FadeInContainerProps>`
  opacity: 0;
  animation-name: ${fadeinAnim};
  animation-delay: ${props => props.delay}s;
  animation-duration: ${props => props.duration}s;
  animation-fill-mode: forwards;
`;
