import React, { useContext, useEffect } from 'react'
import CartContext from '../context/cartContext'

function Modal() {
    const {modalContent, ShowModal } = useContext(CartContext);
    useEffect(() => {
        ShowModal()
    })
  return (
    <div className="modal">
        <h4>{modalContent.title}</h4>
        <p>{modalContent.text}</p>
    </div>
  )
}

export default Modal