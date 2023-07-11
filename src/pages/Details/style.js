import { styled } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  font-size: 1rem;
  color: #f1f1f1;
  background: unset;
  padding-bottom: 3rem;

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

  & .content {
    width: 100%;
    max-width: ${({ width }) => (width ? `${width}%` : '100%')};
    margin-inline: auto;
  }

  & p {
    text-align: justify;
    font-size: 1rem;
    margin-block: 1rem 3.375rem;
  }

  & .textButton {
    display: flex;
    margin-left: auto;
    margin-block: 4rem;
  }

  & .wrap {
    width: 100%;
    height: calc(100vh - 6.625rem);
    overflow-y: auto;
    padding-bottom: 3rem;
  }
`
