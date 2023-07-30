import { styled } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;

  & .content {
    display: flex;
    width: 35%;
    flex-direction: column;
    width: 100%;

    & h1 {
      text-align: center;
      font-size: 3rem;
      color: ${({ theme }) => theme.COLORS.ORANGE};
    }

    & p {
      text-align: center;
      font-size: 0.875rem;
      color: ${({ theme }) => theme.COLORS.GRAY_100};

      margin-bottom: 3rem;
    }
  }

  & img {
    width: 65%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.4);
    opacity: 0.5;
    pointer-events: none;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  padding-inline: 10rem;
  margin-bottom: 7.75rem;

  & h2 {
    text-align: center;
    font-size: 1.5rem;

    margin-bottom: 2.5rem;
  }

  & button {
    margin-top: 1.5rem;
  }
`
