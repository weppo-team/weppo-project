import {
  InfoCircleOutlined,
  CalendarOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons'
import { useSelectedGame } from '../../../../context/SelectedGameContext'

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

export const useFormatItems = () => {
  const [selectedGame] = useSelectedGame()

  const getPath = ({ label, path }) =>
    label === 'Rooms' ? `${path}/${selectedGame}` : path

  const isDisabled = ({ label }) => {
    switch (label) {
      case 'Statistics':
      case 'Games':
        return false

      case 'Rooms':
        return selectedGame === null

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
