import PropTypes from 'prop-types'
import { Card, Avatar, Tooltip } from 'antd'
import { StatsTable } from './components/StatsTable'
import { StatsTileElements } from './elements'

const { Meta } = Card
const { StyledCard } = StatsTileElements

export const StatsTile = ({ disabled, icon, title, name }) => {
  let statsTable = <StatsTable name={name} />
  if (disabled)
    statsTable =
      'Statistics for this game will be made available along with the game.'
  return (
    <Tooltip
      title={
        disabled && 'The statistics for this game are currently unavailable'
      }
    >
      <StyledCard
        disabled={disabled}
        hoverable={false}
        title={<Meta avatar={<Avatar src={icon} />} title={title} />}
      >
        {statsTable}
      </StyledCard>
    </Tooltip>
  )
}

StatsTile.propTypes = {
  disabled: PropTypes.bool.isRequired,
  icon: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}
