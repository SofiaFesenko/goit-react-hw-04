import { useState } from 'react';
import css from './ImageModal.module.css'
import Modal from 'react-modal';

function ImageModal({}) {
  Modal.setAppElement('#root');

  const [isOpen, setIsOpen] = useState(false);

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
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} style={customStyles} contentLabel="Example Modal">

        <button onClick={() => setIsOpen(false)}>close</button>
        <h2>Hello</h2>
        <div>I am a modal</div>

      </Modal>
    </div>
    )
}

export default ImageModal