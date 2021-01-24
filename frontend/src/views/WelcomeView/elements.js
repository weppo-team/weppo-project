import styled, { css } from 'styled-components'
import { Typography } from 'antd'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledImage = styled.img(
  ({ theme }) => css`
    margin-right: ${theme.spacing.big};
    height: 100%;
    width: 60%;
  `,
)

const StyledParagraph = styled(Typography.Paragraph)`
  font-size: 1.2rem;
  @media (max-width: 1220px) {
    font-size: 0.8rem;
  }
`

export const WelomeViewElements = {
  Container,
  StyledImage,
  StyledParagraph,
}
