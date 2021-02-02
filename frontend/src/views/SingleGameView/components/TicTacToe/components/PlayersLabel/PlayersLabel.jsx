import PropTypes from 'prop-types'
import { Typography } from 'antd'

const { Title } = Typography

export const PlayersLabel = ({ playerOne, playerTwo }) => (
  <Title level={3}>{`${playerOne} vs ${playerTwo}`}</Title>
)

PlayersLabel.propTypes = {
  playerOne: PropTypes.string.isRequired,
  playerTwo: PropTypes.string.isRequired,
}
