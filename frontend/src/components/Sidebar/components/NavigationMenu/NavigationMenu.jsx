import { Menu } from 'antd'
import { useEffect, useState, useCallback } from 'react'
import { useHistory, useLocation, Link } from 'react-router-dom'
import { InfoCircleOutlined, CalendarOutlined } from '@ant-design/icons'
import { useTheme } from 'styled-components'
import { NavigationMenuElements } from './elements'

const { StyledMenu } = NavigationMenuElements

const items = [
  {
    key: '1',
    label: 'Statistics',
    path: '/stats',
    icon: <InfoCircleOutlined />,
  },
  { key: '2', label: 'Games', path: '/games', icon: <CalendarOutlined /> },
]

export const NavigationMenu = () => {
  const history = useHistory()
  const location = useLocation()

  const findSelectedItem = useCallback(
    () => items.find((_item) => location.pathname.startsWith(_item.path))?.key,
    [location],
  )

  const theme = useTheme()
  const [selectedKey, setSelectedKey] = useState(findSelectedItem())

  useEffect(() => {
    setSelectedKey(findSelectedItem())
  }, [findSelectedItem, setSelectedKey])

  const onClickMenu = (item) => {
    const clicked = items.find((_item) => _item.key === item.key)

    if (clicked) {
      history.push(clicked.path)
    }
  }

  return (
    <StyledMenu
      theme="dark"
      mode="inline"
      selectedKeys={[selectedKey]}
      customTheme={theme}
      onClickMenu={onClickMenu}
    >
      {items.map((item) => (
        <Menu.Item key={item.key} icon={item.icon}>
          <Link to={item.path}>{item.label}</Link>
        </Menu.Item>
      ))}
    </StyledMenu>
  )
}
