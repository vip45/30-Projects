import React from 'react'

const Modal = ({closeMod}) => {
  return (
    <div className='modal-div'>
        <h2>New Note</h2>
        <input type="text" />
        <div className='modal-btns'>
            <button onClick={closeMod}  className='modal-cancel-btn'>Cancel</button>
            <button className='modal-add-btn'>Add</button>
        </div>
    </div>
  )
}

export default Modal