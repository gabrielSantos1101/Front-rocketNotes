import { styled } from 'styled-components'

export const Wrap = styled.div`
  color: ${({ theme, $isActive }) =>
    $isActive ? theme.COLORS.ORANGE : theme.COLORS.GRAY_100};
  font-size: 1rem;
  width: fit-content;
  margin-inline: auto;

  border: none;
  background: none;

  &::selection {
    background: ${({ theme }) => theme.COLORS.ORANGE};
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`
