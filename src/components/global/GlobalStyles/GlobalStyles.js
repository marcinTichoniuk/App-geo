import { createGlobalStyle } from 'styled-components';
import { setFont, setColor } from '../../../helpers/styles/styles';

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
@import url('https://fonts.googleapis.com/css?family=Mansalva&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: ${setFont.main};
  background: ${setColor.mainGreen};
}
p {
  line-height: 145%;
}
h1 {
  margin-bottom: 25px;
}
h3 {
  font-size: 24px;
  letter-spacing: 1px;
}
`

export default GlobalStyles;