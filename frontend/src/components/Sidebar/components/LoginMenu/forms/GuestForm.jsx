import { useState } from 'react'
import { message, Typography, Input } from 'antd'
import PropTypes from 'prop-types'
import { UserOutlined, LoginOutlined } from '@ant-design/icons'
import { FormElements } from './elements'
import { guest } from '../../../../../services/auth/authServices'

const { StyledForm, StyledButton } = FormElements
const { Title } = Typography

export const GuestForm = ({ handleSubmitButton }) => {
  const [username, setUsername] = useState('')
  const usernameRegex = /^(?=.{6,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9]+(?<![_.])$/
  const [buttonState, setButtonState] = useState(true)

  const handleSubmit = (event) => {
    event.preventDefault()
    message.info('Attempting login as guest...')
    guest(username).then(
      (response) => {
        handleSubmitButton()
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
    setButtonState(false)
    console.log(usernameRegex.test(username))
  }

  return (
    <>
      <Title level={4}>
        You will be logged as a guest, without access to statistics and other
        settings of registered users, but with full access to games and rooms.
      </Title>

      <StyledForm
        initialValues={{ remember: true }}
        onFieldsChange={checkButton}
      >
        <StyledForm.Item
          name="nickname"
          rules={[
            { required: true, message: 'Please enter your nickname' },
            {
              pattern: /^(?=.{6,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9]+(?<![_.])$/,
              message:
                'Username should be 6-20 character, only latin letters and numbers',
            },
          ]}
          onChange={(event) => setUsername(event.target.value)}
        >
          <Input prefix={<UserOutlined />} placeholder="Nickname" />
        </StyledForm.Item>

        <StyledButton
          icon={<LoginOutlined />}
          type="primary"
          htmlType="submit"
          onClick={handleSubmit}
          disabled={buttonState}
        >
          Log in as a guest
        </StyledButton>
      </StyledForm>
    </>
  )
}

GuestForm.propTypes = {
  handleSubmitButton: PropTypes.func.isRequired,
}
