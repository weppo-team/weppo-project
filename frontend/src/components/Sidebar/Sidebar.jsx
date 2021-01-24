import { Typography } from 'antd'
import { NavigationMenu } from './components/NavigationMenu'
import { LoginMenu } from './components/LoginMenu'
import { SidebarElements } from './elements'
import { useAppInfo } from '../../context/AppInfoContext'

const { Title } = Typography

const { LogoWrapper, StyledSider, StyledDivider } = SidebarElements

export const Sidebar = () => {
  const { title } = useAppInfo()

  return (
    <StyledSider breakpoint="lg" collapsedWidth="0">
      <LogoWrapper>
        <Title level={4}>{title}</Title>
        <StyledDivider />
      </LogoWrapper>
      <NavigationMenu />
      <LoginMenu />
    </StyledSider>
  )
}
