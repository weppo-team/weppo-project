import { useState } from 'react'
import { Input } from 'antd'
import { UserOutlined, LockOutlined, LoginOutlined } from '@ant-design/icons'
import { FormElements } from './elements'

const { StyledForm, StyledButton } = FormElements

export const LoginForm = () => {
  const usernameRegex = /^(?=.{6,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9]+(?<![_.])$/
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,32}$/

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [buttonState, setButtonState] = useState(true)

  const handleSubmit = (event) => {
    event.preventDefault()

    let valid = false
    if (usernameRegex.test(username) && passwordRegex.test(password))
      valid = true

    if (valid) alert(`Form valid, log in with: \n${username} \n${password}`)
    else alert('Form invalid')
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
