import { useState } from 'react'
import PropTypes from 'prop-types'
import { message, Input } from 'antd'
import { UserOutlined, LockOutlined, LoginOutlined } from '@ant-design/icons'
import { FormElements } from './elements'
import { login } from '../../../../../services/auth/authServices'

const { StyledForm, StyledButton } = FormElements

export const LoginForm = ({ handleLogin }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [buttonState, setButtonState] = useState(true)

  const handleSubmit = (event) => {
    event.preventDefault()
    message.info('Attempting login...')
    handleLogin()
    login(username, password).then(
      (response) => {
        message.success(response.data.message, 5)
      },
      (error) => {
        const errorMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString()
        message.error(errorMessage, 5)
      },
    )
  }

  const checkButton = () => {
    setButtonState(username.length < 6 || password.length < 8)
  }

  return (
    <StyledForm initialValues={{ remember: true }} onFieldsChange={checkButton}>
      <StyledForm.Item
        name="username"
        rules={[
          { required: true, message: 'Username required' },
          {
            pattern: /.{6,20}/,
            message: 'Username should be 6-20 characters long',
          },
        ]}
        onChange={(event) => setUsername(event.target.value)}
      >
        <Input prefix={<UserOutlined />} placeholder="Username" />
      </StyledForm.Item>

      <StyledForm.Item
        name="password"
        rules={[
          { required: true, message: 'Password required' },
          {
            pattern: /.{8,32}/,
            message: 'Password should be 8-32 characters long',
          },
        ]}
        onChange={(event) => setPassword(event.target.value)}
      >
        <Input
          prefix={<LockOutlined />}
          type="password"
          placeholder="Password"
        />
      </StyledForm.Item>

      <StyledForm.Item>
        <StyledButton
          icon={<LoginOutlined />}
          onClick={handleSubmit}
          disabled={buttonState}
          type="primary"
          htmlType="submit"
        >
          Log in
        </StyledButton>
      </StyledForm.Item>
    </StyledForm>
  )
}

LoginForm.propTypes = {
  handleLogin: PropTypes.func.isRequired,
}
