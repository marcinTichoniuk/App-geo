import { css } from 'styled-components';

// media query
const sizes = {
  xlarge: 1200,
  large: 992,
  medium: 768,
  small: 576,
}
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
     @media (min-width: ${sizes[label]}px) {
        ${css(...args)};
     }
  `
  return acc
}, {});


// font
export const setFont = {
  main: `'Roboto', sans-serif`,
  sub: `'Mansalva', cursive;`
}

// colors
export const setColor = {
  primary: "#d00b37",
  mainWhite: "#fff",
  mainBlack: "#000",
  mainGreen: "#5cdb95",
  subGreen: "#2e6d4a",
}

// flex
export const setFlex = ({ alignItems = 'center', justifyContent = 'center' } = {}) => (
  `display: flex;
justify-content: ${justifyContent};
align-items: ${alignItems}
`
)