import { styled } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  font-size: 1rem;
  text-align: center;
  color: #f1f1f1;
  background: unset;

  & h1::selection,
  & h2::selection,
  & h3::selection,
  & h4::selection,
  & h5::selection,
  & h6::selection,
  & p::selection {
    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  & p {
    text-align: justify;
    margin-block: 1rem 3.375rem;
  }

  & .textButton {
    display: flex;
    margin-left: auto;
    margin-block: 4rem;
  }

  & .wrap {
    width: 100%;
    max-width: ${({ width }) => (width ? `${width}%` : '100%')};
    margin-inline: auto;
  }
`
