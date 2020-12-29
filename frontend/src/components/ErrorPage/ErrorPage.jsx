import { Typography } from 'antd'
import { WarningTwoTone } from '@ant-design/icons'
import { ErrorPageElements } from './elements'
import { useAppInfo } from '../../context/AppInfoContext'

const { Title } = Typography

const { Container } = ErrorPageElements

export const ErrorPage = () => {
  const { repoUrl } = useAppInfo()

  return (
    <Container>
      <WarningTwoTone twoToneColor="#ee0000" />
      <Title level={4} type="danger">
        An unexpected error occurred!
      </Title>
      <Title level={5}>
        We are really sorry that this has happened to you. Please let us know
        about the situation you encountered by opening the{' '}
        <a href={`${repoUrl}/issues`}>issue</a>
      </Title>
    </Container>
  )
}
