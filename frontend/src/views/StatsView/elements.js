import styled, { css } from 'styled-components'

const Container = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.big};
    @media (max-width: 584px) {
      justify-content: center;
    }
  `,
)

export const StatsViewElements = {
  Container,
}
