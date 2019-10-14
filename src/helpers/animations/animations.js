import { keyframes } from 'styled-components';

export const fadeIn = keyframes`
0% {
  opacity: 0;
  transform: translateY(100%);
}
50% {
  opacity: 0.5;
  transform: translateY(-10%);
}
100% {
  opacity: 1;
  transform: translateY(0);
}
`

export const fadeIn2 = keyframes`
0% {
  opacity: 0;
  transform: translateY(-100%);
}
50% {
  opacity: 0.5;
  transform: translateY(10%);
}
100% {
  opacity: 1;
  transform: translateY(0);
}
`

export const dualRing = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`