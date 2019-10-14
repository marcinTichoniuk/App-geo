import styled from 'styled-components';
import { setColor, setFont } from '../../../helpers/styles/styles';

import Country from './Country';

const CountryStyled = styled(Country)`
  width: 300px;
  padding-left: 20px;
  margin: 0 0 25px 40px;
  font-weight: normal;
  color: ${setColor.mainBlack};
  &::after {
    content: '';
    display: block;
    width: 200px;
    height: 1px;
    background: #111;
  }
  p {
    font-size: 14px;
    font-style: normal;
    font-weight: bold;
    font-family: ${setFont.main};
    span {
      font-weight: normal;
      color: ${setColor.subGreen}
    }
  }
  h3 {
    margin-bottom: 5px;
    font-family: ${setFont.main};
    color: ${setColor.primary};
  }
`

export default CountryStyled;