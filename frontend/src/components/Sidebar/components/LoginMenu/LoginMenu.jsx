import { LoginOutlined, FormOutlined, UserOutlined } from '@ant-design/icons'
import { useState } from 'react'
import { LoginMenuElements } from './elements'
import { LoginForm, RegisterForm, GuestForm } from './forms'
import { LoginModal } from './components/LoginModal'

const { StyledDiv, StyledMenuButton } = LoginMenuElements

const items = [
  {
    key: '1',
    label: 'Login',
    icon: <LoginOutlined />,
    modalTitle: 'Login as user',
    modalContent: (callback) => <LoginForm handleLogin={callback} />,
  },
  {
    key: '2',
    label: 'Register',
    icon: <FormOutlined />,
    modalTitle: 'Register as user',
    modalContent: (callback) => <RegisterForm handleLogin={callback} />,
  },
  {
    key: '3',
    label: 'Play as a guest',
    icon: <UserOutlined />,
    modalTitle: 'Log as a guest',
    modalContent: (callback) => <GuestForm handleLogin={callback} />,
  },
]

export const LoginMenu = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [modalTitle, setModalTitle] = useState(null)
  const [modalContent, setModalContent] = useState(null)
  return (
    <>
      <StyledDiv>
        {items.map((item) => (
          <StyledMenuButton
            shape="round"
            key={item.key}
            icon={item.icon}
            onClick={() => {
              setModalTitle(item.modalTitle)
              console.log(item.modalContent)
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
}
