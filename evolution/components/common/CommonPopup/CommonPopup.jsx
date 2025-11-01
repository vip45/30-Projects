import React from 'react'
import { Modal, ModalBody } from 'reactstrap'
import styles from './CommonPopup.module.css'

const CommonPopup = ({ isOpen, toggle ,children}) => {
  return (
    <>
    {/* {isOpen && <div className={styles.backdrop}></div>} */}
    <Modal isOpen={isOpen} toggle={toggle} centered   >
       <ModalBody>{children}</ModalBody>
    </Modal>
    </>
  )
}

export default CommonPopup