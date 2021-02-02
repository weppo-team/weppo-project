import styled, { css } from 'styled-components'
import { Card } from 'antd'

const Container = styled.div(
  ({ theme }) => css`
    display: flex;
    justify-content: space-between;
    gap: ${theme.spacing.big};
    @media (max-width: 584px) {
      justify-content: center;
    }
  `,
)

const StyledCard = styled(Card)(
  ({ disabled }) => css`
    width: 100%;
    ${disabled
      ? css`
          opacity: 0.6;
          cursor: normal;
        `
      : null}
  `,
)

export const StatsTileElements = {
  Container,
  StyledCard,
}
