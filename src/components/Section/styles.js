import { styled } from 'styled-components'

export const Wrap = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-y: auto;

  width: ${({ width }) => (width ? `${width}%` : '100%')};
  height: 100%;
  max-height: calc(100vh - 17.5rem);

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

  & h2::selection {
    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    color: ${({ theme }) => theme.COLORS.WHITE};
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

  ${({ $isinline }) =>
    !$isinline
      ? `& .tags{ display: flex; 
        flex-direction: column;
      }`
      : `
      & .tags {
      display: flex; 
        flex-direction: row;
        gap: 1.1875rem;
      }
        `};
`
