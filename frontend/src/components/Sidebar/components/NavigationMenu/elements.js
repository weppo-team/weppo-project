import styled, { css } from 'styled-components'
import { Menu } from 'antd'

const StyledMenu = styled(Menu)(
  ({ customTheme: theme }) => css`
    .ant-menu-item {
      margin-top: ${theme.spacing.big};
    }
  `,
)

export const NavigationMenuElements = {
  StyledMenu,
}
