import { styled } from 'styled-components'

export const Wrap = styled.div`
  width: fit-content;
  height: fit-content;
  position: relative;

  margin-inline: auto;
  margin-bottom: 4rem;

  & img {
    width: 11.25rem;
    height: 11.25rem;
    object-fit: cover;
    border-radius: 100%;
  }

  & span {
    display: grid;
    place-items: center;
    width: 3rem;
    height: 3rem;

    position: absolute;
    bottom: 0;
    right: 0;

    cursor: pointer;
    border-radius: 100%;
    background-color: ${({ theme }) => theme.COLORS.ORANGE};

    &:hover {
      & svg path {
        color: ${({ theme }) => theme.COLORS.WHITE};
      }
    }

    & svg path {
      color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }
  }

  & input {
    width: 0;
    height: 0;
  }
`
