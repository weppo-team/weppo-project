import styled, { css } from 'styled-components'
import { Layout, Typography } from 'antd'

const { Sider } = Layout
const { Title } = Typography

const StyledTitle = styled(Title)(
  ({ theme }) => css`
    a,
    a:visited {
      color: ${theme.color.white};
    }
  `,
)

const LogoWrapper = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: ${theme.spacing.huge};
    height: 32px;
    margin: ${theme.antd.spacing.mid} 0 ${theme.spacing.huge} 0;
  `,
)

const StyledSider = styled(Sider)(
  ({ theme }) => css`
    .ant-layout-sider-children {
      display: flex;
      flex-direction: column;
    }
    .ant-typography {
      color: ${theme.color.white};
    }
  `,
)

const StyledDivider = styled.div(
  ({ theme }) => css`
    border-bottom: 1px solid ${theme.color.white};
    width: 90%;
  `,
)

export const SidebarElements = {
  LogoWrapper,
  StyledSider,
  StyledDivider,
  StyledTitle,
}
