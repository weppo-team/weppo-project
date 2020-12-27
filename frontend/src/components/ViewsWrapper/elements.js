import styled, { css } from 'styled-components'
import { Layout } from 'antd'

const { Content: AntdContent } = Layout

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
  Content,
  MainLayout,
}
