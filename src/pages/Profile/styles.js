import { styled } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  height: 100%;
  width: 100%;

  &::before {
    content: '';
    position: absolute;
    top: 0;

    width: 100%;
    height: 9rem;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  }

  & .content {
    display: flex;
    width: 35%;
    flex-direction: column;
    width: 100%;

    padding: 1.25rem;
    margin-top: -6rem;

    & h1 {
      text-align: center;
      font-size: 3rem;
      color: ${({ theme }) => theme.COLORS.ORANGE};

      &::selection {
        background: ${({ theme }) => theme.COLORS.ORANGE};
        color: ${({ theme }) => theme.COLORS.WHITE};
      }
    }

    & p {
      text-align: center;
      font-size: 0.875rem;
      color: ${({ theme }) => theme.COLORS.GRAY_100};

      margin-bottom: 3rem;

      &::selection {
        background: ${({ theme }) => theme.COLORS.ORANGE};
        color: ${({ theme }) => theme.COLORS.WHITE};
      }
    }

    & form {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;

      width: 21.25rem;
      margin-inline: auto;
      margin-bottom: 7.75rem;

      & div {
        display: grid;
        gap: 0.5rem;
      }

      & button {
        margin-top: 0;
      }
    }

    & .arrow {
      position: absolute;
      left: 8rem;

      height: 1.25rem;

      border: none;
      border-radius: 100%;
      background: none;
      cursor: unset;

      & svg {
        cursor: pointer;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
      }
    }
  }
`
