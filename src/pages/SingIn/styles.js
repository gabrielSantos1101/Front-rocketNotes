import { styled } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;

  & .singIn {
    width: 40%;

    padding-inline: 10rem;
  }

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.4);
  }
`
