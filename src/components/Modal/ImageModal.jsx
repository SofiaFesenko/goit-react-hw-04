import Modal from 'react-modal';

function ImageModal({imgSrc, isOpen, onClose}) {
  Modal.setAppElement('#root');

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  }

    return (
      <div>
      <Modal 
        isOpen={isOpen} 
        onRequestClose={onClose} 
        style={customStyles} 
        contentLabel="Example Modal"
      >
        
        <img src={imgSrc} />

      </Modal>
    </div>
    )
}

export default ImageModal