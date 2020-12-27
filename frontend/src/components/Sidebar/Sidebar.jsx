import { Typography } from 'antd'
import { useContext } from 'react'
import { NavigationMenu } from './components/NavigationMenu'
import { SidebarElements } from './elements'
import { AppInfoContext } from '../../context/AppInfoContext'

const { Title } = Typography

const { LogoWrapper, StyledSider, StyledDivider } = SidebarElements

export const Sidebar = () => {
  const { title } = useContext(AppInfoContext)

  return (
    <StyledSider breakpoint="lg" collapsedWidth="0">
      <LogoWrapper>
        <Title level={4}>{title}</Title>
        <StyledDivider />
      </LogoWrapper>
      <NavigationMenu />
    </StyledSider>
  )
}
