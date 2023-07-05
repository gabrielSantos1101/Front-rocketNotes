import { styled } from 'styled-components'

export const Wrap = styled.span`
  font-family: 'Roboto', serif;
  font-weight: 400;
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  width: fit-content;
  min-width: 4rem;
  padding: 0.25rem 0.5rem;
  border-radius: 5px;

  background-color: ${({ theme }) => theme.COLORS.ORANGE};
`
