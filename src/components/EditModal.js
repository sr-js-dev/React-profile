import React, { useState, useEffect } from 'react'
import Modal from "react-bootstrap/Modal";
import CloseIcon from '../assets/img/closeIcon.svg'
import { EmailTypes } from '../dumy/data'
import Arrow from '../assets/img/arrow.svg'

const EditModal = (props) => {
  const { editModal, setEditModal } = props;
  const [isOpenSelect, setIsOpenSelect] = useState(false)

  // modal hide
  const hideModal = () => {
    setEditModal({ ...editModal, open: false })
  }

  const handleCheck = (evt) => {
    const _type = {...editModal['type']}
    _type[evt.target.name] = evt.target.checked
    setEditModal({...editModal, type: _type})
  }

  const isShowHide = () => {
    setIsOpenSelect(!isOpenSelect)
  }

  return (
    <Modal show={editModal.open} onHide={hideModal} className="register edit-modal" animation={false}>
      <Modal.Body>
        <div className="close-icon">
          <img src={CloseIcon} onClick={hideModal} alt="closeIcon" />
        </div>
        <div className="position-relative edit-select-section">
          <div className="d-flex justify-content-between align-items-center select-box cursor-pointer" id="isEditSelect" onClick={isShowHide}>
            <span className="select-title">Select & deselect email points</span>
            <span><img src={Arrow} className="arrow" alt="arrow" style={{ transform: isOpenSelect ? 'rotate(-180deg)' : 'rotate(0deg)' }} /></span>
          </div>
          {
            isOpenSelect &&
            <ul className="check-list">
              {
                EmailTypes && EmailTypes.length > 0 && EmailTypes.map((item, i) => (
                  <li key={i} className="checkbox">
                    <label className="main">{item.item}
                      <input type="checkbox" name={item.value} checked={editModal['type'][`${item.value}`]} onChange={handleCheck} />
                      <span className="geekmark"></span>
                    </label>
                  </li>
                ))
              }
            </ul>
          }
        </div>
        <div className="content">
          { editModal['type']['name'] && <div className="txt">My name is <span className="detail">Jane Smith.</span></div> }
          { editModal['type']['companyName'] && <div className="txt">I work at <span className="detail">Company.</span></div> }
          { editModal['type']['employeeNum'] && <div className="txt">My current position is <span className="detail">CFO.</span></div> }
          { editModal['type']['position'] && <div className="txt">My phone number is <span className="detail">+XX-X-XXX-XXXX.</span></div> }
          { editModal['type']['phoneNum'] && <div className="txt">My work email is <span className="detail">jane.smith@company.com</span></div> }
          { editModal['type']['email'] && <div className="txt">I will like to discuss this <span className="discuss-content">“I have recently helped a 3 billion automative company in Germany reduce 30% of their company tax overhead”</span></div> }
        </div>
        <div className="send-btn-part d-flex justify-content-around align-items-center w-100">
          <button className="btn-edit-send font-weight-bold">Send</button>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default EditModal