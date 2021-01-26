import { Typography } from 'antd'
import { FrownTwoTone } from '@ant-design/icons'
import { ErrorPageElements } from '../ErrorPage/elements'

const { Container } = ErrorPageElements

const { Title } = Typography

export const TooSmallResolutionPage = () => (
  <Container>
    <FrownTwoTone twoToneColor="#f9d71c" />
    <Title level={4} type="warning">
      Currenty we do not support your screen&apos;s resolution.
    </Title>
    <Title level={5}></Title>
  </Container>
)
