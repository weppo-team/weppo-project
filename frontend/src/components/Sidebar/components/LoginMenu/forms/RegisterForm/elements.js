import styled, { css } from 'styled-components'
import { Form, Button } from 'antd'

const StyledForm = styled(Form)(
  () => css`
    max-width: 400px;
    width: 80%;
    margin: auto;
    padding: 10px;
  `,
)

const StyledButton = styled(Button)(
  () => css`
    width: 100%;
  `,
)

export const RegisterFormElements = {
  StyledForm,
  StyledButton,
}
