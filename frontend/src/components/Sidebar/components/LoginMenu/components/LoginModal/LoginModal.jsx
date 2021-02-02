import { Typography, Modal } from 'antd'
import PropTypes from 'prop-types'

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
    <Modal
      visible={isModalVisible}
      title={styledTitle}
      onCancel={handleCancel}
      footer={null}
    >
      {modalContent ? modalContent(handleCancel) : null}
    </Modal>
  )
}

LoginModal.propTypes = {
  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
  isModalVisible: PropTypes.bool.isRequired,
  onModalVisible: PropTypes.func.isRequired,
}
