import React, { useEffect, useState } from 'react'
import BackgroundImg from "../assets/img/bg-img2.png";
import ProfileImg from "../assets/img/profileImg.png";
import Logo from "../assets/img/Logo.svg";
import Vector from "../assets/img/Vector.svg";
import List1 from "../assets/img/list-1.svg";
import List2 from "../assets/img/list-2.svg"
import List3 from "../assets/img/list-3.svg"
import Menu1 from '../assets/img/menu1.svg'
import CloseMenu from '../assets/img/CloseMenu.svg'
import Attached from '../assets/img/attach.svg'
import CloseIcon from '../assets/img/closeIcon.svg'
import ThemeIcon from '../assets/img/Theme.svg'
import PhotoAdd from '../assets/img/photoAdd.svg'
import Arrow from '../assets/img/arrow.svg'
import Modal from "react-bootstrap/Modal";
import EditModal from '../components/EditModal'
import EmailListEdit from '../components/EmailListEdit'
// style
import "../assets/style/Profile.css";
// dumy data
import { ThemeMode, TalkAboutData } from '../dumy/data'

const Profile = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false)
  const [isCloseMenu, setIsCloseMenu] = useState(false)
  const [isTalkEdit, setIsTalkEdit] = useState(false)
  const [isOpenSelect, setIsOpenSelect] = useState(false)
  const [selectVal, setSelectVal] = useState('Dark')
  const [colorVal, setColorVal] = useState('#55ACEE')
  const [isContactEdit, setIsContactEdit] = useState(false)
  const [talkAboutEdit, setTalkAboutEdit] = useState({ title: '', emailList: [] })
  const [contactVal, setContactVal] = useState({ title: 'Why you should contact me', msg: 'I have recently helped a 3 billion automative company in Germany reduce 30% of their company tax overhead.', emailMsg: 'Contact me on similar subject matter' })
  const [contactEditModal, setContactEditModal] = useState({
    open: false,
    type: {
      name: true,
      companyName: true,
      employeeNum: true,
      position: true,
      phoneNum: true,
      email: true
    }
  })
  // Talk About string get from dumy data
  useEffect(() => {
    setTalkAboutEdit(TalkAboutData)
  }, [])

  // select option hide event
  useEffect(() => {
    document.addEventListener("click", closeSelect);
    return () => document.removeEventListener("click", closeSelect)
  }, [isOpenSelect])

  useEffect(() => {
    if (isOpenModal) document.body.style.paddingRight = "0px";
  }, [isOpenModal])

  const closeSelect = (evt) => {
    if (evt.target.id === "isOpenSelect") return;
    setIsOpenSelect(false)
  }
  // modal show
  const showModal = () => {
    if (!isEditMode) setIsOpenModal(true);
    else setContactEditModal({ ...contactEditModal, open: true })
  };
  // modal hide
  const hideModal = () => {
    setIsOpenModal(false);
  }
  // What we can talk about section Edit display
  const talkAboutDisplay = () => {
    if (!isEditMode) return;
    setIsTalkEdit(true)
  }
  // What we can talk about section Edit display
  const hideSaveForm = () => {
    setIsTalkEdit(false)
  }
  // select option show or hide
  const isShowHide = () => {
    setIsOpenSelect(!isOpenSelect)
  }
  // select option value set
  const handleChange = (val) => {
    setSelectVal(val)
  }
  // color pick value set
  const colorChange = (val) => {
    setColorVal(val)
  }
  // display contact me edit
  const contactDisplay = () => {
    if (!isEditMode) return;
    setIsContactEdit(true)
  }
  // contact value change
  const contactChange = (evt) => {
    setIsContactEdit(false)
    evt.preventDefault();
    const data = new FormData(evt.target);
    const _title = data.get('title') || contactVal.title
    const _msg = data.get('msg') || contactVal.msg
    const _emailMsg = data.get('emailMsg') || contactVal.emailMsg
    setContactVal({ title: _title, msg: _msg, emailMsg: _emailMsg })
  }

  return (
    <div
      className="container-fluid"
      style={{
        backgroundImage: !isEditMode ? `url(${BackgroundImg})` : null,
        backgroundSize: "cover",
        height: "100%",
        width: "100%",
        backgroundColor: '#15202B'
      }}
    >
      {/* prfile-photo-title-bar */}
      {
        !isEditMode ?
          <div className="profile-photo-title-bar">
            <p className="title">Profile Sample <span className="ml-3 percent">100%</span><span className="undeited">unedited</span></p>
          </div> : null
      }
      <div className="row">
        <div className="col-lg-7">
          <div className={isEditMode ? 'dashed-first-section' : 'first-section'}>
            <div className="row py-2 mx-3 py-4">
              <div className="col-lg-9 col-md-6 col-sm-7 logo-lg">
                <img src={Logo} alt="siteLogo" />
              </div>
            </div>
            {/* section1 */}
            <div className={isEditMode ? 'photo-section dashed-border-bottom' : 'photo-section solid-border-bottom'}>
              <div className="row mx-3">
                <div className="col-lg-5 photo-part">
                  <div className={isEditMode ? 'photo-dashed-border position-relative photo-img-section' : 'position-relative photo-img-section'}>
                    {
                      isEditMode ?
                        <>
                          <div className="photo-layout"></div>
                          <div className="add-photo d-flex align-items-center">
                            <div className="h-100">
                              <img src={PhotoAdd} alt="photoAdd" />
                            </div>
                            <div className="ml-2">
                              <p className="mb-0 add-your-img">Add your Image</p>
                              <p className="mb-0 img-size">W 200 * H 300</p>
                            </div>
                          </div>
                        </> : null
                    }
                    <div className={isEditMode ? 'photo-detail custom-bg-color' : 'photo-detail'}>
                      <p className={isEditMode ? 'text-white font-weight-bold' : 'font-weight-bold'}>Omar Faruq BA (Hons), ACCA</p>
                      <p className={isEditMode ? 'text-white' : ''}>Client Partner - Tech & High Growth</p>
                    </div>
                    <img src={ProfileImg} alt="profile" className="profile-img" />
                  </div>
                </div>
                <div className="col-lg-7 mb-2 position-relative">
                  {
                    isEditMode && isContactEdit &&
                    <>
                      <form className="contact-edit" onSubmit={contactChange}>
                        <button className="btn-save-edit-mode">Save</button>
                        <div className="title block">
                          <span className="require-txt">Title: Maximum 21 characters</span>
                          <input type="text" className="common-input" name="title" autoComplete="off" placeholder={contactVal.title} autoFocus={true} maxLength="21" />
                        </div>
                        <div className="block content">
                          <span className="require-txt">Message: Maximum 240 characters</span>
                          <textarea row="2" maxLength="240" placeholder={contactVal.msg} name="msg" autoComplete="off" className="common-textarea" />
                        </div>
                        <div className="block content">
                          <span className="require-txt">Email Message: Maximum 31 characters</span>
                          <input type="text" className="common-input" maxLength="31" name="emailMsg" autoComplete="off" placeholder={contactVal.emailMsg} />
                        </div>
                      </form>
                      <div className="layout" onClick={() => setIsContactEdit(false)}></div>
                    </>
                  }
                  <h2 className={isEditMode ? 'dashed-border title mb-4 cursor-pointer' : 'title mb-4'} onClick={contactDisplay}>{contactVal.title}</h2>
                  <p className={isEditMode ? 'dashed-border description' : 'description'}>{contactVal.msg}</p>
                  <p className={isEditMode ? 'dashed-border similar-subject' : 'similar-subject'} onClick={showModal}>
                    <span>{contactVal.emailMsg}</span>
                    <span className="m-left-8">
                      <img src={Vector} className="email-icon" alt="Vector" />
                    </span>
                  </p>
                </div>
              </div>
            </div>
            {/* section2 */}
            <div className={isEditMode ? 'talk-about-section dashed-border-bottom' : 'talk-about-section solid-border-bottom'}>
              <div className={isTalkEdit ? 'row extra-style' : 'row mx-3'}>
                <div className="col-lg-12 position-relative">
                  <h2 className={isEditMode ? 'dashed-border title cursor-pointer' : 'title'} onClick={talkAboutDisplay}>{talkAboutEdit['title']}</h2>
                  {
                    talkAboutEdit['content'] && talkAboutEdit['content'].length > 0 && talkAboutEdit['content'].map((item, i) => (
                      TalkAboutParagraph(item, i, isEditMode)
                    ))
                  }
                  {
                    isEditMode && isTalkEdit &&
                    <>
                      <EmailListEdit setIsTalkEdit={setIsTalkEdit} talkAboutEdit={talkAboutEdit} setTalkAboutEdit={setTalkAboutEdit} />
                      <div className="layout" onClick={hideSaveForm}></div>
                    </>
                  }
                </div>
              </div>
            </div>
            {/* section3 */}
            <div className="profile-info-section desktop-view">
              <div className={isEditMode ? ' row dashed-border extra-style' : 'row mx-3'}>
                <div className="col-lg-4">
                  <h1>Company</h1>
                  <p className="mb-0">OnTheGo Accountants</p>
                </div>
                <div className="col-lg-4">
                  <h1>Department</h1>
                  <p className="mb-0">Tech & Growth</p>
                </div>
                <div className="col-lg-4">
                  <h1>Location</h1>
                  <p className="mb-0">Birmingham</p>
                </div>
                <div className="col-lg-4">
                  <h1>Address</h1>
                  <p className="mb-0">The Colmore Building</p>
                  <p className="mb-0">20 Colmore Circus Queensway</p>
                  <p className="mb-0">Birmingham, B4 6AT</p>
                </div>
                <div className="col-lg-4">
                  <h1>Office number</h1>
                  <a href="#phone">03330 067 123</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* section4 */}
        <div className="col-lg-5 qoutes-section px-4">
          <div>
            <p className={isEditMode ? 'title mb-4 dashed-border' : 'title mb-4'}>Qoutes from Clients <span className="font-weight-bold">About me</span></p>
          </div>
          <div className={isEditMode ? 'dashed-border' : ''}>
            <p className='content font-weight-bold'>“This is by far the best accounting service that I've ever used. A unique combination of quality,
            affordability and kindness. Virtually, this is the best experience you can have with any accounting firm.
            For our company (Eventera Ltd),
              <span className="emphases">they went above and beyond, having multiple calls explaining the whole system and providing high-quality advice when needed. Kudos for doing such a fantastic job!”</span>
            </p>
            <p className='title'>Petros Topouzis, Founder : eventera.io</p>
          </div>
          <div className={isEditMode ? 'dashed-border mb-4' : 'mb-4'} style={{ marginTop: '3rem' }}>
            <p className="content font-weight-bold">I am very much satisfied with service provided by OnTheGo Accountants. Whenever I raise request or any query, I will get the information immediately.
              <span className="emphases">&nbsp;Personally, I say thanks to Omar for his service. I will recommend OnTheGo accounts to other colleagues.</span>
            </p>
            <p className="title">Viswa, Founder</p>
          </div>
        </div>
        {/* mobile view for section3 */}
        <div className="profile-info-section mobile-view">
          <div className={isEditMode ? ' row dashed-border extra-style' : 'row mx-3'}>
            <div className="col-lg-4">
              <h1>Company</h1>
              <p className="mb-0">OnTheGo Accountants</p>
            </div>
            <div className="col-lg-4">
              <h1>Department</h1>
              <p className="mb-0">Tech & Growth</p>
            </div>
            <div className="col-lg-4">
              <h1>Location</h1>
              <p className="mb-0">Birmingham</p>
            </div>
            <div className="col-lg-4">
              <h1>Address</h1>
              <p className="mb-0">The Colmore Building</p>
              <p className="mb-0">20 Colmore Circus Queensway</p>
              <p className="mb-0">Birmingham, B4 6AT</p>
            </div>
            <div className="col-lg-4">
              <h1>Office number</h1>
              <a href="#phone">03330 067 123</a>
            </div>
          </div>
        </div>
      </div>
      {/* open Edit Menu */}
      {
        !isEditMode ?
          <div className="open-edit-menu">
            {
              isOpenMenu ?
                <div className="expanded-menu">
                  <div>My Profile</div>
                  <div>Billing</div>
                  <div>Log out</div>
                </div> : null
            }
            <div className="open-menu d-flex justify-content-around align-items-center">
              <div className="menu-icon">
                <img src={isOpenMenu ? CloseMenu : Menu1} onClick={() => setIsOpenMenu(!isOpenMenu)} alt="menu" />
              </div>
              <div className="d-flex align-items-center share">
                <img src={Attached} alt="attached" />
                <span className="ml-1">Share</span>
              </div>
              <button className="btn-open-edit-mode" onClick={() => setIsEditMode(!isEditMode)}><strong>Open Edit Mode</strong></button>
            </div>
          </div> :
          // open Close menu bar
          <div className="open-close-menu">
            {
              isCloseMenu ?
                <div className="expanded-menu">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>Background:</div>
                    <div className="position-realtive">
                      <div className="d-flex justify-content-between align-items-center border border-white select-box" id="isOpenSelect" onClick={isShowHide}>
                        <span>{selectVal}</span>
                        <span><img src={Arrow} className="arrow" alt="arrow" style={{ transform: isOpenSelect ? 'rotate(-180deg)' : 'rotate(0deg)' }} /></span>
                      </div>
                      {
                        isOpenSelect &&
                        <ul className="select-list">
                          {
                            ThemeMode && ThemeMode.length > 0 && ThemeMode.map((item, i) => (
                              <li key={i} onClick={() => handleChange(item.color)}>{item.color}</li>
                            ))
                          }
                        </ul>
                      }
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>Brand Colour:</div>
                    <div className="color-picker">
                      <input type="color" id="colorPicker" onChange={(e) => colorChange(e.target.value)} name="favcolor" value={colorVal} />
                    </div>
                    <div className="dashed-border p-1">
                      {colorVal}
                    </div>
                  </div>
                </div> : null
            }
            <div className="open-menu d-flex justify-content-around align-items-center">
              <div className="d-flex align-items-center theme" onClick={() => setIsCloseMenu(!isCloseMenu)}>
                <img src={isCloseMenu ? CloseMenu : ThemeIcon} alt="menu" />
                <span className="ml-1 text-white">Theme</span>
              </div>
              <button className="btn-close-edit-mode" onClick={() => setIsEditMode(!isEditMode)}><strong>Close Edit Mode</strong></button>
            </div>
          </div>}
      {/* modal */}
      <Modal show={isOpenModal} onHide={hideModal} className="register" animation={false}>
        <Modal.Body>
          <div className="close-icon">
            <img src={CloseIcon} onClick={hideModal} alt="closeIcon" />
          </div>
          <div className="content">
            <p className="font-weight-bold title">To: Omar Faruq</p>
            {contactEditModal['type']['name'] && <div className="txt">My name is <input type="text" className="profile-detail" placeholder="Jane Smith" style={{ width: '136px' }} />.</div>}
            <div className="txt">
              {contactEditModal['type']['companyName'] && <>I work at <input type="text" className="profile-detail" placeholder="Company" style={{ width: '135px' }} />;</>}
              {contactEditModal['type']['employeeNum'] && <>we have around <input type="text" className="profile-detail" placeholder="xx employees" style={{ width: '176px' }} />.</>}
            </div>
            <div className="txt">
              {contactEditModal['type']['phoneNum'] && <>My phone number is <input type="text" className="profile-detail" placeholder="+XX-X-XXX-XXXX" style={{ width: '203px' }} />,</>}
              {contactEditModal['type']['email'] && <>and my work email is <input type="text" className="profile-detail" placeholder="jane.smith@company.com" style={{ width: '337px' }} />.</>}
            </div>
            <div className="txt">I will like to discuss this  <span className="discuss-content">
              “I have recently helped a 3 billion automative company in Germany reduce 30% of their company tax overhead”</span></div>
          </div>
          <div className="send-btn-part d-flex justify-content-around align-items-center w-100">
            <button className="btn-send font-weight-bold">Send</button>
          </div>
        </Modal.Body>
      </Modal>
      <EditModal editModal={contactEditModal} setEditModal={setContactEditModal} />
    </div>
  )
}

// talk about content
function TalkAboutParagraph(txt, id, mode) {
  return (
    <div className={mode ? 'd-flex align-items-center talk-txt dashed-border' : 'd-flex align-items-center talk-txt'} key={id}>
      <div>
        <img src={id === 0 ? List1 : (id === 1 ? List2 : List3)} alt="List1" className="list-img" />
      </div>
      <div className={mode ? 'description cursor-pointer' : 'description'} style={{ marginLeft: '11.5px' }}>
        <span>{txt}</span>
        <span className="m-left-8">
          <img src={Vector} className="email-icon" alt="Vector" />
        </span>
      </div>
    </div>
  )
}

export default Profile;