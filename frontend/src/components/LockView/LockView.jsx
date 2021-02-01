import PropTypes from 'prop-types'
import { Typography } from 'antd'
import { LockViewElements } from './elements'

const { Container } = LockViewElements

const { Title } = Typography

export const LockView = ({ icon: Icon, mainText, secondaryText }) => (
  <Container>
    <Icon />
    <Title level={3}>{mainText}</Title>
    {secondaryText && (
      <Title level={4} type="secondary">
        {secondaryText}
      </Title>
    )}
  </Container>
)

LockView.propTypes = {
  icon: PropTypes.node.isRequired,
  mainText: PropTypes.string.isRequired,
  secondaryText: PropTypes.node,
}
