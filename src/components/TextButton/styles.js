import { styled } from 'styled-components'

export const Wrap = styled.button`
  color: ${({ theme, $isActive }) =>
    $isActive ? theme.COLORS.ORANGE : theme.COLORS.GRAY_100};
  font-size: 1rem;

  border: none;
  background: none;
`
