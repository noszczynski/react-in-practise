import styled, { css } from 'styled-components';

const Button = styled.button`
  padding: 0;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : theme.notes)};
  width: 220px;
  height: 47px;
  border: none;
  border-radius: 50px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;
  cursor: pointer;
  outline: none;

  ${({ secondary, theme }) =>
    secondary &&
    css`
      background-color: ${theme.grey200};
      width: 105px;
      height: 30px;
      font-size: 10px;
    `}
`;

export default Button;
