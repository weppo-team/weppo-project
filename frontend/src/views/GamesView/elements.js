import styled, { css } from 'styled-components'

const Container = styled.div(
  ({ theme }) => css`
    display: flex;
    gap: ${theme.spacing.big};
    flex-wrap: wrap;
    @media (max-width: 584px) {
      justify-content: center;
    }
  `,
)

export const GamesViewElements = {
  Container,
}
