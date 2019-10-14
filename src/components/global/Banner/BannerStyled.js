import styled from 'styled-components';

import Banner from './Banner';
import { fadeIn, fadeIn2 } from '../../../helpers/animations/animations';

const BannerStyled = styled(Banner)`
  width: 100%;
  text-align: center;
  margin-top: 80px;
  padding: 50px 20px;
  background: rgba(0, 0, 0, 0.5);
  h1 {
    font-weight: normal;
    font-size: 26px;
    letter-spacing: 2px;
    animation: ${fadeIn} 1.5s ease-in-out;
  }
  input {
    animation: ${fadeIn2} 1.5s ease-in-out;
  }
`

export default BannerStyled;