import PropTypes from 'prop-types'
import { Typography } from 'antd'

const { Title } = Typography

export const TurnLabel = ({ player, playerSymbol }) => (
  <Title level={4}>{`Next move: ${player} - [${playerSymbol}]`}</Title>
)

TurnLabel.propTypes = {
  player: PropTypes.string.isRequired,
  playerSymbol: PropTypes.string.isRequired,
}
