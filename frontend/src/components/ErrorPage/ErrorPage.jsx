import { Typography } from 'antd'
import { WarningTwoTone } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { ErrorPageElements } from './elements'

const { Title } = Typography

const { Container } = ErrorPageElements

export const ErrorPage = () => (
  <Container>
    <WarningTwoTone twoToneColor="#ee0000" />
    <Title level={4} type="danger">
      An unexpected error occurred!
    </Title>
    <Title level={5}>
      We are really sorry that this has happened to you. Please let us know
      about the situation you encountered by opening the{' '}
      <Link
        to={{ pathname: 'https://github.com/weppo-team/weppo-project/issues' }}
      >
        issue
      </Link>
    </Title>
  </Container>
)
