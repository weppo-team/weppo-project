import styled, { css } from 'styled-components'
import { Layout } from 'antd'

const { Header: AntdHeader, Content: AntdContent } = Layout

const Header = styled(AntdHeader)(
  ({ theme }) => css`
    padding: 0;
    background-color: ${theme.color.white};
  `,
)

const Content = styled(AntdContent)(
  ({ theme }) => css`
    margin: ${theme.antd.spacing.big} ${theme.antd.spacing.mid} 0;
    background-color: ${theme.color.white};
    padding: ${theme.antd.spacing.mid};
  `,
)

const MainLayout = styled(Layout)`
  height: 100vh;
`

export const ViewsWrapperElements = {
  Header,
  Content,
  MainLayout,
}
