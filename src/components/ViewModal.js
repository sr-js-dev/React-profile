import React, { useEffect, useState } from 'react'
import Modal from "react-bootstrap/Modal";
import CloseIcon from '../assets/img/closeIcon.svg'

const ViewModal = (props) => {
  const { viewModal, setViewModal, isFlag } = props
  const [emailType, setEmailType] = useState([])

  useEffect(() => {
    setEmailType(viewModal.type)
  }, [viewModal])

  // modal hide
  const hideModal = () => {
    const _viewModal = { ...viewModal }
    _viewModal.viewOpen = false
    setViewModal(_viewModal)
  }

  return (
    <Modal show={viewModal.viewOpen} onHide={hideModal} className="register" animation={false}>
      <Modal.Body>
        <div className="close-icon">
          <img src={CloseIcon} onClick={hideModal} alt="closeIcon" />
        </div>
        <div className="content">
          <p className="font-weight-bold title">To: Omar Faruq</p>
          {emailType['name'] && <div className="txt">My name is <input type="text" className="profile-detail" placeholder="Jane Smith" /></div>}
          {emailType['companyName'] && <div className="txt">I work at <input type="text" className="profile-detail" placeholder="Company" /></div>}
          {emailType['position'] && <div className="txt">My current position is <input type="text" className="profile-detail" placeholder="CFO" /></div>}
          {emailType['phoneNum'] && <div className="txt">My phone number is <input type="text" className="profile-detail" placeholder="+XX-X-XXX-XXXX" /></div>}
          {emailType['email'] && <div className="txt">My work email is <input type="text" className="profile-detail" placeholder="jane.smith@company.com" /></div>}
          <div className="txt">I will like to discuss this <span className="discuss-content">“I have recently helped a 3 billion automative company in Germany reduce 30% of their company tax overhead”</span></div>
        </div>
        <div className="send-btn-part d-flex justify-content-around align-items-center w-100">
          <button className="btn-send font-weight-bold">Send</button>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default ViewModal