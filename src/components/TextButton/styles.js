import { styled } from 'styled-components'

export const Wrap = styled.div`
  color: ${({ theme, $isActive }) =>
    $isActive ? theme.COLORS.WHITE : theme.COLORS.GRAY_100};
  font-size: 1rem;
  width: 100%;
  margin-inline: auto;

  border: none;
  background: ${({ theme, $isActive }) =>
    $isActive ? theme.COLORS.ORANGE : 'none'};
  padding-block: 1rem;

  &::selection {
    background: ${({ theme }) => theme.COLORS.ORANGE};
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`
