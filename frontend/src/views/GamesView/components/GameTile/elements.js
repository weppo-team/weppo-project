import styled, { css } from 'styled-components'
import { Card } from 'antd'

const StyledCard = styled(Card)(
  ({ disabled }) => css`
    width: 250px;
    ${disabled
      ? css`
          opacity: 0.6;
          cursor: normal;
        `
      : null}
  `,
)

export const GameTileElements = {
  StyledCard,
}
