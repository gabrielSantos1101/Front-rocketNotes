import { styled } from 'styled-components'

export const Wrap = styled.div`
  width: ${({ width }) => (width ? `${width}%` : '100%')};
  max-width: 62.5rem;
  text-align: left;
  margin-top: 1.75rem;

  margin-inline: auto;

  & h2 {
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};

    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 1.25rem;
    font-weight: 400;
  }

  & ul li {
    list-style: none;
  }

  & ul li a:hover {
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  & ul li a:hover::selection {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  & ul li a::selection {
    background-color: ${({ theme }) => theme.COLORS.ORANGE};
  }
`
