import { Input } from 'antd'
import {
  UserOutlined,
  MailOutlined,
  LockOutlined,
  FormOutlined,
} from '@ant-design/icons'
import { FormElements } from './elements'

const { StyledForm, StyledButton } = FormElements

export const RegisterForm = () => (
  <StyledForm>
    <StyledForm.Item
      name="username"
      rules={[{ required: true, message: 'Username is required' }]}
    >
      <Input placeholder="Username" prefix={<UserOutlined />} />
    </StyledForm.Item>

    <StyledForm.Item
      name="email"
      rules={[
        {
          type: 'email',
          required: true,
          message: 'Proper e-mail is required',
        },
      ]}
    >
      <Input placeholder="E-mail" prefix={<MailOutlined />} />
    </StyledForm.Item>

    <StyledForm.Item
      name="password"
      placeholder="password"
      rules={[{ required: true, message: 'Proper password is required' }]}
    >
      <Input placeholder="Password" prefix={<LockOutlined />} type="password" />
    </StyledForm.Item>

    <StyledForm.Item>
      <StyledButton icon={<FormOutlined />} type="primary" htmlType="submit">
        Register
      </StyledButton>
    </StyledForm.Item>
  </StyledForm>
)
