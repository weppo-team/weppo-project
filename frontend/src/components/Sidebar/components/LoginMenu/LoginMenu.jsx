import PropTypes from 'prop-types'
import { useState } from 'react'
import { LoginOutlined, FormOutlined, UserOutlined } from '@ant-design/icons'
import { useTheme } from 'styled-components'
import { LoginMenuElements } from './elements'
import { LoginForm } from './forms/LoginForm'
import { RegisterForm } from './forms/RegisterForm'
import { GuestForm } from './forms/GuestForm'

const { StyledMenu, StyledModal, StyledMenuButton } = LoginMenuElements

const items = [
  {
    key: '1',
    label: 'Login',
    icon: <LoginOutlined />,
    modalTitle: 'Login as user',
    modalContent: <LoginForm />,
  },
  {
    key: '2',
    label: 'Register',
    icon: <FormOutlined />,
    modalTitle: 'Register as user',
    modalContent: <RegisterForm />,
  },
  {
    key: '3',
    label: 'Play as a guest',
    icon: <UserOutlined />,
    modalTitle: 'Log as a guest',
    modalContent: <GuestForm />,
  },
]

const LoginModal = ({
  modalTitle,
  modalContent,
  isModalVisible,
  onModalVisible,
}) => {
  const handleOk = () => {
    onModalVisible(false)
  }

  const handleCancel = () => {
    onModalVisible(false)
  }

  return (
    <StyledModal
      visible={isModalVisible}
      title={modalTitle}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
    >
      {modalContent}
    </StyledModal>
  )
}

export const LoginMenu = () => {
  const theme = useTheme()
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [modalTitle, setModalTitle] = useState('Empty title')
  const [modalContent, setModalContent] = useState('Empty content')

  return (
    <>
      <StyledMenu theme="dark" mode="inline" customTheme={theme}>
        {items.map((item) => (
          <StyledMenuButton
            shape="round"
            key={item.key}
            icon={item.icon}
            onClick={() => {
              setModalTitle(item.modalTitle)
              setModalContent(item.modalContent)
              setIsModalVisible(true)
            }}
          >
            {item.label}
          </StyledMenuButton>
        ))}
      </StyledMenu>
      <LoginModal
        modalTitle={modalTitle}
        modalContent={modalContent}
        isModalVisible={isModalVisible}
        onModalVisible={(value) => setIsModalVisible(value)}
      />
    </>
  )
}

LoginModal.propTypes = {
  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.string.isRequired,
  isModalVisible: PropTypes.bool.isRequired,
  onModalVisible: PropTypes.func.isRequired,
}
