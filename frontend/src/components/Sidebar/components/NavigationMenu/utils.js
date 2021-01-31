import {
  InfoCircleOutlined,
  CalendarOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons'
import { useEffect, useState } from 'react'
import { useSelectedGame } from '../../../../context/SelectedGameContext'
import { checkIfUserLoggedIn } from '../../../../services/auth/authServices'

const items = [
  {
    key: '1',
    label: 'Statistics',
    path: '/stats',
    icon: <InfoCircleOutlined />,
  },
  { key: '2', label: 'Games', path: '/games', icon: <CalendarOutlined /> },
  { key: '3', label: 'Rooms', path: '/game', icon: <UnorderedListOutlined /> },
]

export const useFormatItems = (isLoggedIn) => {
  const [selectedGame] = useSelectedGame()
  const [userType, setUserType] = useState(undefined)

  useEffect(() => {
    checkIfUserLoggedIn()
      .then((response) => {
        setUserType(response.data.userType)
      })
      .catch(() => setUserType(null))
  }, [isLoggedIn])

  const getPath = ({ label, path }) =>
    label === 'Rooms' ? `${path}/${selectedGame}` : path

  const isDisabled = ({ label }) => {
    switch (label) {
      case 'Statistics':
        return userType !== 'user'

      case 'Games':
        return !userType

      case 'Rooms':
        return selectedGame === null || !userType

      default:
        throw new Error('Unknown label!')
    }
  }

  const getTooltipContent = ({ label }) => {
    switch (label) {
      case 'Statistics':
        return 'Stats of your games'

      case 'Games':
        return 'Choose the game you want to play'

      case 'Rooms':
        return 'Find opponent in previously selected game'

      default:
        throw new Error('Unknown label!')
    }
  }

  return items.map((curr) => ({
    ...curr,
    path: getPath(curr),
    tooltipContent: getTooltipContent(curr),
    disabled: isDisabled(curr),
  }))
}
