import { styled } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  height: 100%;
  width: 100%;

  & .content {
    display: flex;
    width: 35%;
    flex-direction: column;
    width: 100%;
    padding: 1.25rem;

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
      gap: 0.5rem;

      width: 21.25rem;
      margin-inline: auto;
      margin-bottom: 7.75rem;

      & h2 {
        text-align: center;
        font-size: 1.5rem;

        margin-bottom: 2.5rem;

        &::selection {
          background: ${({ theme }) => theme.COLORS.ORANGE};
          color: ${({ theme }) => theme.COLORS.WHITE};
        }
      }

      & button {
        margin-top: 1.5rem;
      }
    }
  }

  & img {
    width: 65%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.4);
    opacity: 0.5;
  }
`
