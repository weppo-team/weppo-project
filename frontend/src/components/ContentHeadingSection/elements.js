import styled, { css } from 'styled-components'

const Container = styled.div(
  ({ theme }) => css`
    margin-bottom: ${theme.spacing.huge};
  `,
)

export const ContentHeadingSectionElements = {
  Container,
}
