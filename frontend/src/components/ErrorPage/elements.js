import styled, { css } from 'styled-components'

const Container = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60vh;

    svg {
      height: 170px;
      width: 170px;
      margin-bottom: ${theme.spacing.huge};
    }

    .ant-typography {
      width: 70%;
      text-align: center;
    }
  `,
)

export const ErrorPageElements = {
  Container,
}
