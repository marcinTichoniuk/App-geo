import styled from 'styled-components';
import { setColor, setFont } from '../../../helpers/styles/styles';
import { fadeIn2 } from '../../../helpers/animations/animations'

export const Button = styled.button`
  position: absolute;
  top: 20px;
  padding: 12px 24px;
  background-color: ${setColor.mainGreen};
  color: ${setColor.subGreen};
  box-shadow: 0 0 0 2px ${setColor.subGreen};
  border: none;
  outline: none;
  font-family: ${setFont.main};
  font-size: 14px;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  animation: ${fadeIn2} 1s ease-in-out;
  &:hover {
    background-color: ${setColor.subGreen};
    color: ${setColor.mainWhite}; 
  }
  &.noneActive {
    display: none;
  }
`