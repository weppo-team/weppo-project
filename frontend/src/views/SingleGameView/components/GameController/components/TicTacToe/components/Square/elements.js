import styled, { css } from 'styled-components'

const StyledButton = styled.button(
  () => css`
    background: #fff;
    border: 2px solid #999;
    float: left;
    text-align: center;
    font-size: 90px;
    font-weight: bold;
    margin-right: -1px;
    margin-top: -1px;
    padding: 0px;
  `,
)

export const SquareElements = {
  StyledButton,
}
