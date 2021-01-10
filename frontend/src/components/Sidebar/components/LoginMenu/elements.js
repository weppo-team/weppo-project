import styled, { css } from 'styled-components'
import { Menu, Modal, Button } from 'antd'

const StyledMenu = styled(Menu)(
  ({ customTheme: theme }) => css`
    position: absolute;
    width: 100%;
    bottom: 0;
    margin-bottom: ${theme.spacing.big};
  `,
)

const StyledModal = styled(Modal)(() => css``)

const StyledMenuButton = styled(Button)(
  () => css`
    width: 90%;
    margin 10px; 
  `,
)

export const LoginMenuElements = { StyledMenu, StyledModal, StyledMenuButton }
