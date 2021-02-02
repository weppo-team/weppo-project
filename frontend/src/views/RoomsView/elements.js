import styled, { css } from 'styled-components'

const HeadingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  height: 100%;
`

const ClickableText = styled.span(
  ({ theme }) => css`
    color: ${theme.color.blue};
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  `,
)

export const RoomsViewElements = {
  HeadingWrapper,
  Container,
  ContentWrapper,
  ClickableText,
}
