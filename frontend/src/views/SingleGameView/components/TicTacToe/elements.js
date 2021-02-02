import styled, { css } from 'styled-components'
import { Card } from 'antd'

const Grid = styled.div(
  () => css`
    display: grid;
    grid-template-rows: 100px 100px 100px;
    grid-template-columns: 100px 100px 100px;
  `,
)

const StyledCard = styled(Card)(
  () => css`
    width: 400px;
  `,
)

const Container = styled.div(
  () => css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
)

export const TicTacToeBoardElements = {
  Grid,
  StyledCard,
  Container,
}
