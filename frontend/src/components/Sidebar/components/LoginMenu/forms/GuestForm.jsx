import { Typography, Input } from 'antd'
import PropTypes from 'prop-types'
import { UserOutlined, LoginOutlined } from '@ant-design/icons'
import { FormElements } from './elements'

const { StyledForm, StyledButton } = FormElements
const { Title } = Typography

export const GuestForm = ({ handleLogin }) => (
  <>
    <Title level={4}>
      You will be logged as a guest, without access to statistics and other
      settings of registered users, but with full access to games and rooms.
    </Title>

    <StyledForm initialValues={{ remember: true }}>
      <StyledForm.Item
        name="nickname"
        rules={[{ required: true, message: 'Please enter your nickname' }]}
      >
        <Input prefix={<UserOutlined />} placeholder="Nickname" />
      </StyledForm.Item>

      <StyledButton
        icon={<LoginOutlined />}
        type="primary"
        htmlType="submit"
        onSubmit={handleLogin()}
      >
        Continue as a guest
      </StyledButton>
    </StyledForm>
  </>
)

GuestForm.propTypes = {
  handleLogin: PropTypes.func.isRequired,
}
