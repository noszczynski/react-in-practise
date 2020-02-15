import styled from 'styled-components';

const ButtonIcon = styled.button`
  height: 67px;
  width: 67px;
  border-radius: 20px;
  background: url(${({ icon }) => icon}) center 50% no-repeat;
  border: none;
  background-color: ${({ active }) => (active ? 'hsl(100, 100%, 100%)' : 'transparent')};
`;

export default ButtonIcon;
