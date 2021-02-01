import styled, { css } from 'styled-components'

const Container = styled.div(
  ({ theme }) => css`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-self: center;
    align-items: center;
    svg {
      margin-bottom: ${theme.spacing.big};
      width: 90px;
      height: 90px;
    }
  `,
)

export const LockViewElements = {
  Container,
}
