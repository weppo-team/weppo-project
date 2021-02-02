import {
  LoginOutlined,
  FormOutlined,
  UserOutlined,
  LogoutOutlined,
} from '@ant-design/icons'
import PropTypes from 'prop-types'
import { message } from 'antd'
import { useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { LoginMenuElements } from './elements'
import { LoginForm, RegisterForm, GuestForm } from './forms'
import { LoginModal } from './components/LoginModal'
import {
  checkIfUserLoggedIn,
  logout,
} from '../../../../services/auth/authServices'

const { StyledDiv, StyledMenuButton } = LoginMenuElements

const items = [
  {
    key: '1',
    label: 'Login',
    icon: <LoginOutlined />,
    modalTitle: 'Login as user',
    modalContent: (callback) => <LoginForm handleSubmitButton={callback} />,
  },
  {
    key: '2',
    label: 'Register',
    icon: <FormOutlined />,
    modalTitle: 'Register as user',
    modalContent: (callback) => <RegisterForm handleSubmitButton={callback} />,
  },
  {
    key: '3',
    label: 'Play as a guest',
    icon: <UserOutlined />,
    modalTitle: 'Log as a guest',
    modalContent: (callback) => <GuestForm handleSubmitButton={callback} />,
  },
]

export const LoginMenu = ({ isLoggedIn, setIsLoggedIn }) => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [modalTitle, setModalTitle] = useState(null)
  const [modalContent, setModalContent] = useState(null)
  const history = useHistory()

  const updateLoggedStatus = () => {
    checkIfUserLoggedIn().then(
      (response) => {
        setIsLoggedIn(response.data.userLogged)
      },
      () => setIsLoggedIn(false),
    )
  }

  useEffect(() => updateLoggedStatus(), [isModalVisible, isLoggedIn])

  const standardMenu = (
    <>
      <StyledDiv>
        {items.map((item) => (
          <StyledMenuButton
            shape="round"
            key={item.key}
            icon={item.icon}
            onClick={() => {
              setModalTitle(item.modalTitle)
              // eslint-disable-next-line no-unused-vars
              setModalContent((_) => item.modalContent)
              setIsModalVisible(true)
            }}
          >
            {item.label}
          </StyledMenuButton>
        ))}
      </StyledDiv>
      <LoginModal
        modalTitle={modalTitle}
        modalContent={modalContent}
        isModalVisible={isModalVisible}
        onModalVisible={(value) => setIsModalVisible(value)}
      />
    </>
  )

  const logoutLabel = 'Logout'
  const logoutMenu = (
    <StyledDiv>
      <StyledMenuButton
        shape="round"
        icon={<LogoutOutlined />}
        onClick={() => {
          logout().then(
            (response) => {
              setIsLoggedIn(false)
              message.info(response.data.message)
              history.push('/')
            },
            () => message.error('Error during logout, please try again'),
          )
        }}
      >
        {logoutLabel}
      </StyledMenuButton>
    </StyledDiv>
  )

  return isLoggedIn ? logoutMenu : standardMenu
}

LoginMenu.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  setIsLoggedIn: PropTypes.func.isRequired,
}
