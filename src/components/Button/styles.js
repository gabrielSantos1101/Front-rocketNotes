import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

export const Wrap = styled(Link)`
  width: 100%;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  font-weight: 500;
  border-radius: ${({ $round }) => (!$round ? '0' : '10px')};

  padding: 0 1rem;
  margin-top: 2.125rem;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &::selection {
    background: ${({ theme }) => theme.COLORS.ORANGE};
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`
