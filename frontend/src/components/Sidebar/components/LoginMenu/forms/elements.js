import styled, { css } from 'styled-components'
import { Form, Button } from 'antd'

const StyledForm = styled(Form)(
  ({ customTheme: theme }) => css`
    width: 80%;
    margin: auto;
    padding: ${theme.spacing.mid};
  `,
)

const StyledButton = styled(Button)(
  () => css`
    width: 100%;
  `,
)

export const FormElements = {
  StyledForm,
  StyledButton,
}
