import { Menu, Tooltip } from 'antd'
import PropTypes from 'prop-types'
import { useEffect, useState, useCallback } from 'react'
import { useHistory, useLocation, Link } from 'react-router-dom'
import { useTheme } from 'styled-components'
import { NavigationMenuElements } from './elements'
import { useFormatItems } from './utils'

const { StyledMenu } = NavigationMenuElements

export const NavigationMenu = ({ isLoggedIn }) => {
  const history = useHistory()
  const location = useLocation()
  const formatedItems = useFormatItems(isLoggedIn)

  const findSelectedItem = useCallback(
    () =>
      formatedItems.find((_item) => location.pathname.startsWith(_item.path))
        ?.key,
    [location],
  )

  const theme = useTheme()
  const [selectedKey, setSelectedKey] = useState(findSelectedItem())

  useEffect(() => {
    setSelectedKey(findSelectedItem())
  }, [findSelectedItem, setSelectedKey])

  const onClickMenu = (item) => {
    const clicked = formatedItems.find((_item) => _item.key === item.key)

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
      {formatedItems.map((item) => (
        <Menu.Item key={item.key} icon={item.icon} disabled={item.disabled}>
          <Tooltip placement="right" title={item.tooltipContent}>
            <Link to={item.path}>{item.label}</Link>
          </Tooltip>
        </Menu.Item>
      ))}
    </StyledMenu>
  )
}

NavigationMenu.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
}
