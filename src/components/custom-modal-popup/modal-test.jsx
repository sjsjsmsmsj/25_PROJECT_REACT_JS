import Modal from './modal.jsx'
import { useState } from 'react'
import './modal.css'

export default function ModalTest() {
    const [showModalPopup, setShowModalPopup] = useState(false)

    const handleToggleModalPopup = () => {
        setShowModalPopup(!showModalPopup)
    }

    const onClose = () => {
        setShowModalPopup(false)
    }


    return (
        <div>
            <button onClick={handleToggleModalPopup}>Open Modal Popup</button>
            {
                showModalPopup &&
                <Modal
                    onClose={onClose}
                    header={<div>Customized header</div>}
                    body={<div>Customized body</div>}
                    footer={<div>Customized footer</div>}
                />
            }
        </div>
    )
}