import styled from 'styled-components';

const ButtonIcon = styled.button`
  display: block;
  height: 67px;
  width: 67px;
  border-radius: 20px;
  background: url(${({ icon }) => icon}) center 50% no-repeat;
  background-size: 50%;
  border: none;

  &.active {
    background-color: hsl(100, 100%, 100%);
  }
`;

export default ButtonIcon;
