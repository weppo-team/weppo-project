import styled, { css } from 'styled-components'
import { Button } from 'antd'

const StyledDiv = styled.div(
  ({ customTheme: theme }) => css`
    margin-top: auto;
    margin-bottom: ${theme.spacing.big};
  `,
)

const StyledMenuButton = styled(Button)(
  ({ customTheme: theme }) => css`
    width: 90%;
    margin: ${theme.spacing.mid};
  `,
)

export const LoginMenuElements = { StyledDiv, StyledMenuButton }
