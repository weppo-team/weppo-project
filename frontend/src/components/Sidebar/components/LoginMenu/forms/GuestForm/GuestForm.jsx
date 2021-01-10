import { UserOutlined } from '@ant-design/icons'
import { GuestFormElements } from './elements'

const { StyledForm, StyledButton } = GuestFormElements

export const GuestForm = () => (
  <StyledForm>
    <h3>
      You will be logged as a guest, without access to statistics and other
      settings of registered users, but with full access to games and rooms.
    </h3>
    <StyledButton icon={<UserOutlined />} type="primary">
      Continue as a guest
    </StyledButton>
  </StyledForm>
)
