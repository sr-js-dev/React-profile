import React, { useState, useEffect } from 'react'
import Modal from "react-bootstrap/Modal";
import { EmailTypes } from '../dumy/data'
import Arrow from '../assets/img/arrow.svg'

const EditModal = (props) => {
  const { editModal, setEditModal, isFlag } = props;
  const [isOpenSelect, setIsOpenSelect] = useState(false)
  const [type, setType] = useState({
    name: true,
    companyName: true,
    employeeNum: true,
    position: true,
    phoneNum: true,
    email: true
  })

  useEffect(() => {
    if (!editModal.editOpen) return;
    setType(editModal['type'])
  }, [editModal])

  // modal hide
  const hideModal = () => {
    setEditModal({ ...editModal, editOpen: false })
  }

  // save button click
  const saveChangedData = () => {
    setEditModal({ ...editModal, editOpen: false, type: type })
  }

  // email item show or hide
  const handleCheck = (evt) => {
    setType({ ...type, [evt.target.name]: evt.target.checked })
  }

  // modal show or hide
  const isShowHide = () => {
    setIsOpenSelect(!isOpenSelect)
  }

  return (
    <Modal show={editModal.editOpen} onHide={hideModal} className="register edit-modal" animation={false}>
      <Modal.Body>
        <div className="positison-relative">
          <button className="btn-save" onClick={saveChangedData}>Save</button>
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
                        <input type="checkbox" name={item.value} checked={type[`${item.value}`]} onChange={handleCheck} />
                        <span className="geekmark"></span>
                      </label>
                    </li>
                  ))
                }
              </ul>
            }
          </div>
          <div className="content">
            {type['name'] && <div className="txt">My name is <span className="detail">Jane Smith.</span></div>}
            {type['companyName'] && <div className="txt">I work at <span className="detail">Company.</span></div>}
            {type['position'] && <div className="txt">My current position is <span className="detail">CFO.</span></div>}
            {type['phoneNum'] && <div className="txt">My phone number is <span className="detail">+XX-X-XXX-XXXX.</span></div>}
            {type['email'] && <div className="txt">My work email is <span className="detail">jane.smith@company.com</span></div>}
            <div className="txt">I will like to discuss this <span className="discuss-content">“I have recently helped a 3 billion automative company in Germany reduce 30% of their company tax overhead”</span></div>
          </div>
          <div className="send-btn-part d-flex justify-content-around align-items-center w-100">
            <button className="btn-edit-send font-weight-bold" disabled>Send</button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default EditModal