import styled from 'styled-components';
import { setFont, setFlex } from '../../../helpers/styles/styles';

import CountryList from './CountryList';

const CountryListStyled = styled(CountryList)`
  width: 100%;
  padding: 50px 20px;
  ol {
    ${setFlex({ justifyContent: 'space-around' })};
    flex-wrap: wrap;
    margin-left: 25px;
    font-size: 30px;
    font-weight: 700;
    font-style: italic;
    font-family: ${setFont.sub};
  }
`

export default CountryListStyled;