import { useState } from 'react'
import { Link } from 'react-router-dom'
import { NavigationMenu } from './components/NavigationMenu'
import { LoginMenu } from './components/LoginMenu'
import { SidebarElements } from './elements'
import { useAppInfo } from '../../context/AppInfoContext'

const { LogoWrapper, StyledSider, StyledDivider, StyledTitle } = SidebarElements

export const Sidebar = () => {
  const { title } = useAppInfo()
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <StyledSider breakpoint="lg" collapsedWidth="0">
      <LogoWrapper>
        <StyledTitle level={4}>
          <Link to="/">{title}</Link>
        </StyledTitle>
        <StyledDivider />
      </LogoWrapper>
      <NavigationMenu isLoggedIn={isLoggedIn} />
      <LoginMenu isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    </StyledSider>
  )
}
