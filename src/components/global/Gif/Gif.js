import styled from 'styled-components';

export const Gif = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0;
  z-index: -1000;
  width: 100%;
  height: 100vh;
  background: url('https://media.giphy.com/media/3rgXBOmTlzyFCURutG/giphy-downsized.gif') center/cover no-repeat;
  transition: opacity 0.5s ease-in-out;
  &.active {
    opacity: 1;
    z-index: 1000;
  }
`