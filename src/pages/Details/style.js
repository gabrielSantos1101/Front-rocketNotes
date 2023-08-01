import { styled } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  font-size: 1rem;
  color: #f1f1f1;
  background: unset;
  padding-bottom: 3rem;

  & .buttons {
    display: flex;
    justify-content: space-between;
  }

  & .content {
    width: 100%;
    max-width: ${({ width }) => (width ? `${width}%` : '100%')};
    margin-inline: auto;

    & p {
      max-height: 18.75rem;
      overflow-y: auto;

      &::-webkit-scrollbar-track {
        margin-block-start: 0;
      }
    }
  }

  & p {
    text-align: justify;
    font-size: 1rem;
    margin-block: 1rem 3.375rem;
  }

  & .textButton {
    display: flex;
    justify-content: flex-end;
    margin-left: auto;
    margin-block: 4rem;

    &:hover {
      color: ${({ theme }) => theme.COLORS.RED};
    }
  }

  & .wrap {
    width: 100%;
    height: calc(100vh - 6.625rem);
    overflow-y: auto;
    padding-bottom: 3rem;
  }

  & section .tags {
    flex-wrap: wrap;
    flex-direction: row;
  }
`
