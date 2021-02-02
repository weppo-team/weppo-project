import PropTypes from 'prop-types'
import { Card, Avatar, Tooltip } from 'antd'
import { useHistory } from 'react-router-dom'
import { GameTileElements } from './elements'
import { useSelectedGame } from '../../../../context/SelectedGameContext'

const { Meta } = Card
const { StyledCard } = GameTileElements

export const GameTile = ({ disabled, icon, title, route, name }) => {
  const history = useHistory()
  const [, setSelectedGame] = useSelectedGame()

  const handleOnClick = () => {
    if (!disabled) {
      setSelectedGame(name)
      history.push(route)
    }
  }

  return (
    <Tooltip title={disabled && 'The game is currently unavailable'}>
      <StyledCard
        disabled={disabled}
        hoverable={!disabled}
        onClick={handleOnClick}
        title={<Meta avatar={<Avatar src={icon} />} title={title} />}
      >
        {/* TODO: PUT HERE USER ELO */}
        Your rating in this game is unknown
      </StyledCard>
    </Tooltip>
  )
}

GameTile.propTypes = {
  disabled: PropTypes.bool.isRequired,
  icon: PropTypes.any.isRequired,
  route: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}
