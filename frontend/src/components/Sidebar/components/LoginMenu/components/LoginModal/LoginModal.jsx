import { Typography } from 'antd'
import PropTypes from 'prop-types'
import { LoginModalElements } from './elements'

const { StyledModal } = LoginModalElements
const { Title } = Typography

export const LoginModal = ({
  modalTitle,
  modalContent,
  isModalVisible,
  onModalVisible,
}) => {
  const handleCancel = () => {
    onModalVisible(false)
  }

  const styledTitle = <Title level={2}>{modalTitle}</Title>

  return (
    <StyledModal
      visible={isModalVisible}
      title={styledTitle}
      onCancel={handleCancel}
      footer={null}
    >
      {modalContent}
    </StyledModal>
  )
}

LoginModal.propTypes = {
  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.string.isRequired,
  isModalVisible: PropTypes.bool.isRequired,
  onModalVisible: PropTypes.func.isRequired,
}
