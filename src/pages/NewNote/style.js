import { styled } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  font-size: 1rem;
  color: #f1f1f1;
  background: unset;
  padding-bottom: 3rem;

  & .content {
    width: 100%;
    overflow-y: auto;

    &::-webkit-scrollbar-track {
      margin-block-start: 5px;
    }
  }
`
export const Form = styled.form`
  width: 100%;
  min-width: 20rem;
  max-width: ${({ width }) => (width ? `${width}%` : '100%')};

  & div:first-child {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-block: 4rem;

    width: 100%;

    & .textButton {
      display: flex;
      margin: 0;
    }
  }

  padding-bottom: 3rem;
  padding-inline: 0.3125rem;
  margin-inline: auto;
`
