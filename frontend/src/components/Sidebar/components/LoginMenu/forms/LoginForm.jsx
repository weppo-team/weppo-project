import { Input } from 'antd'
import { UserOutlined, LockOutlined, LoginOutlined } from '@ant-design/icons'
import { useTheme } from 'styled-components'
import { FormElements } from './elements'

const { StyledForm, StyledButton } = FormElements

export const LoginForm = () => {
  const theme = useTheme()

  return (
    <StyledForm initialValues={{ remember: true }} customTheme={theme}>
      <StyledForm.Item
        name="username"
        rules={[{ required: true, message: 'Please enter your username' }]}
      >
        <Input prefix={<UserOutlined />} placeholder="Username" />
      </StyledForm.Item>

      <StyledForm.Item
        name="password"
        rules={[{ required: true, message: 'Please enter your password' }]}
      >
        <Input
          prefix={<LockOutlined />}
          type="password"
          placeholder="Password"
        />
      </StyledForm.Item>

      <StyledForm.Item>
        <StyledButton icon={<LoginOutlined />} type="primary" htmlType="submit">
          Log in
        </StyledButton>
      </StyledForm.Item>
    </StyledForm>
  )
}
