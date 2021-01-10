import { Input } from 'antd'
import { UserOutlined, LockOutlined, LoginOutlined } from '@ant-design/icons'
import { LoginModalElements } from './elements'

const { StyledForm, StyledButton } = LoginModalElements

export const LoginForm = () => (
  <StyledForm
    name="login"
    className="login-form"
    initialValues={{ remember: true }}
  >
    <StyledForm.Item
      name="username"
      rules={[{ required: true, message: 'Please enter your username' }]}
    >
      <Input
        prefix={<UserOutlined className="site-form-item-icon" />}
        placeholder="Username"
      />
    </StyledForm.Item>

    <StyledForm.Item
      name="password"
      rules={[{ required: true, message: 'Please enter your password' }]}
    >
      <Input
        prefix={<LockOutlined className="site-form-item-icon" />}
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
