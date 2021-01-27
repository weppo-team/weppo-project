import { useState } from 'react'
import { message, Input } from 'antd'
import PropTypes from 'prop-types'
import {
  UserOutlined,
  MailOutlined,
  LockOutlined,
  FormOutlined,
} from '@ant-design/icons'
import { FormElements } from './elements'
import { register } from '../../../../../services/auth/authServices'

const { StyledForm, StyledButton } = FormElements

export const RegisterForm = ({ handleLogin }) => {
  const usernameRegex = /^(?=.{6,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9]+(?<![_.])$/
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,32}$/

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [buttonState, setButtonState] = useState(true)

  const checkButton = () => {
    let valid = false
    if (
      usernameRegex.test(username) &&
      passwordRegex.test(password) &&
      email != null
    )
      valid = true
    setButtonState(!valid)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    handleLogin()
    message.info('Attempting register...', 5)
    register(username, email, password).then(
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

  return (
    <StyledForm onFieldsChange={checkButton}>
      <StyledForm.Item
        name="username"
        rules={[
          { required: true, message: 'Username required' },
          {
            pattern: /^(?=.{6,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9]+(?<![_.])$/,
            message: '6-20 characters long, only latin letters and numbers',
          },
        ]}
        onChange={(event) => setUsername(event.target.value)}
      >
        <Input prefix={<UserOutlined />} placeholder="Username" />
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
        onChange={(event) => setEmail(event.target.value)}
      >
        <Input placeholder="E-mail" prefix={<MailOutlined />} />
      </StyledForm.Item>

      <StyledForm.Item
        name="password"
        rules={[
          { required: true, message: 'Password required' },
          {
            pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,32}$/,
            message: '8-32 characters long, at least one letter and one number',
          },
        ]}
        onChange={(event) => setPassword(event.target.value)}
      >
        <Input
          placeholder="Password"
          prefix={<LockOutlined />}
          type="password"
        />
      </StyledForm.Item>

      <StyledForm.Item>
        <StyledButton
          icon={<FormOutlined />}
          onClick={handleSubmit}
          disabled={buttonState}
          type="primary"
          htmlType="submit"
        >
          Register
        </StyledButton>
      </StyledForm.Item>
    </StyledForm>
  )
}

RegisterForm.propTypes = {
  handleLogin: PropTypes.func.isRequired,
}
