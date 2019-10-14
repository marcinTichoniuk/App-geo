import styled from 'styled-components';
import { setColor } from '../../../helpers/styles/styles';

export const Input = styled.input.attrs(props => ({
  type: props.type || 'text',
  placeholder: props.placeholder || 'Enter value',
  name: props.name,
  value: props.value,
}))`
padding: 5px;
font-size: 16px;
border: 1px solid ${setColor.primary};
outline: none;
`