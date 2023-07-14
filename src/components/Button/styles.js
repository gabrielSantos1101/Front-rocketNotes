import { styled } from 'styled-components'

export const Wrap = styled.button`
  width: 100%;
  height: 3.5rem;

  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  font-weight: 500;
  font-family: 'Roboto Slab', serif;

  border: 0;
  border-radius: ${({ round }) => (round === 'true' ? 'none' : '10px')};

  padding: 0 1rem;
  margin-top: 2.125rem;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`
