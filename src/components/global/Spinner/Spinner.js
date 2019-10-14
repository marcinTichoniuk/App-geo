import styled from 'styled-components';
import { dualRing } from '../../../helpers/animations/animations';

export const Spinner = styled.div`
  display: inline-block;
  text-align: center;
  &::after {
    content: " ";
    display: block;
    width: 46px;
    height: 46px;
    margin: 46px;
    border-radius: 50%;
    border: 5px solid #fcf;
    border-color: #fcf transparent #fcf transparent;
    animation: ${dualRing} 1.2s linear infinite;
  }
`

export const SpinnerText = styled.p`
padding-bottom: 10px;
font-size: 24px;
`