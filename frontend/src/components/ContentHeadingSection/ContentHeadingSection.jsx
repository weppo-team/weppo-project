import { Typography } from 'antd'
import PropTypes from 'prop-types'
import { ContentHeadingSectionElements } from './elements'

const { Title } = Typography
const { Container } = ContentHeadingSectionElements

export const ContentHeadingSection = ({ title, subtitle }) => (
  <Container>
    <Title level={2}>{title}</Title>
    <Title level={4} type="secondary">
      {subtitle}
    </Title>
  </Container>
)

ContentHeadingSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
}
