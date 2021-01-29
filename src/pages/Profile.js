import React, { useEffect, useState } from 'react'
import BackgroundImg from "../assets/img/bg-img2.png";
import ProfileImg from "../assets/img/profileImg.png";
import Logo from "../assets/img/Logo.svg";
import Vector from "../assets/img/Vector.svg";
import List from "../assets/img/Number-background.svg";
import Menu1 from '../assets/img/menu1.svg'
import CloseMenu from '../assets/img/CloseMenu.svg'
import Attached from '../assets/img/attach.svg'
import ThemeIcon from '../assets/img/Theme.svg'
import PhotoAdd from '../assets/img/photoAdd.svg'
import Arrow from '../assets/img/arrow.svg'
import EditModal from '../components/EditModal'
import ViewModal from '../components/ViewModal'
import EmailListEdit from '../components/EmailListEdit'
import QoutesEdit from '../components/QuotesEdit'
import { Markup } from 'interweave';
import placeholder from '../assets/img/profileImg.png';
// style
import "../assets/style/Profile.css";
// dumy data
import { ThemeMode, TalkAboutData, ProfileData, QoutesData, QoutesDemoData, ProfileInfo } from '../dumy/data'

const Profile = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const [isEditMode, setIsEditMode] = useState(false)
  const [isCloseMenu, setIsCloseMenu] = useState(false)
  const [isTalkEdit, setIsTalkEdit] = useState(false)
  const [isOpenSelect, setIsOpenSelect] = useState(false)
  const [selectVal, setSelectVal] = useState('Dark')
  const [colorVal, setColorVal] = useState('#55ACEE')
  const [isContactEdit, setIsContactEdit] = useState(false)
  const [talkAboutEdit, setTalkAboutEdit] = useState({})
  const [talkModalData, setTalkModalData] = useState({})
  const [profileEdit, setProfileEdit] = useState({})
  const [qoutesEdit, setQoutesEdit] = useState({})
  const [tempqoutesEdit, setTempQoutesEdit] = useState({})
  const [selectedId, setSelectedId] = useState(0)
  const [profileNamePos, setProfileNamePos] = useState({})
  const [contactVal, setContactVal] = useState({ title: 'Why you should contact me', msg: 'I have recently helped a 3 billion automative company in Germany reduce 30% of their company tax overhead.', emailMsg: 'Contact me on similar subject matter' })
  const [contactEditModal, setContactEditModal] = useState({
    viewOpen: false,
    editOpen: false,
    type: {
      name: true,
      companyName: true,
      employeeNum: true,
      position: true,
      phoneNum: true,
      email: true
    }
  })
  const [{alt, src}, setImg] = useState({
      src: placeholder,
      alt: 'Upload an Image'
  });
  // Talk About string get from dumy data
  useEffect(() => {
    setTalkAboutEdit(TalkAboutData)
    setProfileEdit(ProfileData)
    setQoutesEdit(QoutesData)
    setProfileNamePos(ProfileInfo)
  }, [])

  useEffect(() => {
    if (Object.keys(talkModalData).length > 0) {
      const _talkAboutEdit = { ...talkAboutEdit }
      const _talkModalData = { ...talkModalData }
      let index = parseInt(talkModalData['id']) - 1
      _talkAboutEdit['emailList'][index] = _talkModalData
      setTalkAboutEdit(_talkAboutEdit)
    }
  }, [talkModalData])
  // select option hide event
  useEffect(() => {
    document.addEventListener("click", closeSelect);
    return () => document.removeEventListener("click", closeSelect)
  }, [isOpenSelect])

  useEffect(() => {
    if (contactEditModal.viewOpen) document.body.style.paddingRight = "0px";
  }, [contactEditModal.viewOpen])

  const closeSelect = (evt) => {
    if (evt.target.id === "isOpenSelect") return;
    setIsOpenSelect(false)
  }
  // modal show
  const showModal = () => {
    if (!isEditMode) setContactEditModal({ ...contactEditModal, viewOpen: true })
    else setContactEditModal({ ...contactEditModal, editOpen: true })
  };
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
  // show profile edit
  const showProfileEdit = () => {
    if (!isEditMode) return
    setProfileEdit({ ...profileEdit, isOpen: true })
  }
  // show quotes modal
  const showQuotes = () => {
    if (!isEditMode) return
    setTempQoutesEdit({ ...qoutesEdit })
    setQoutesEdit({ ...qoutesEdit, isOpen: true })
  }
  // hide quotes edit modal
  const hideQuotesEdit = () => {
    setQoutesEdit({ ...tempqoutesEdit })
  }
  // show quotes item edit
  const showItemEdit = (index) => {
    if (!isEditMode) return
    setSelectedId(index)
  }
  // profile name and pos 
  const showProfileNameEdit = () => {
    if(!isEditMode) return
    setProfileNamePos({...profileNamePos, isOpen: true})
  }
  // hide profile name and position
  const hideProfileNamePos = (evt) => {
    console.log("Dddd")
    evt.preventDefault();
    setProfileNamePos({...profileNamePos, isOpen: false})
  }
  // qoutes list change
  const qoutesListChange = (evt) => {
    const _qoutesEdit = { ...qoutesEdit }
    if (evt.target.value === "") { setQoutesEdit({ ...qoutesEdit, list: [] }); return };
    let val = parseInt(evt.target.value)
    let len = parseInt(_qoutesEdit['list'].length)
    if (len > val) {
      let _tempQuotes = _qoutesEdit['list'];
      let arr = _tempQuotes.slice(0, val)
      setQoutesEdit({ ...qoutesEdit, list: arr })
    } else {
      let _tempQuotes = _qoutesEdit['list'];
      for (let i = len; i < val; i++) {
        const tempObj = {
          id: `${i + 1}`,
          content: QoutesDemoData.content,
          name: QoutesDemoData.name,
        }
        _tempQuotes[i] = tempObj
      }
      setQoutesEdit({ ...qoutesEdit, list: _tempQuotes })
    }
  }
  // save profile name and position
  const saveNamePosition = (evt) => {
    evt.preventDefault();
    const data = new FormData(evt.target);
    const _name = data.get('name') || profileNamePos['name']
    const _position = data.get('position') || profileNamePos['position']
    setProfileNamePos({name: _name, position: _position, isOpen: false})
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
  // profile edit value change
  const profileSave = (evt) => {
    evt.preventDefault();
    const _profileEdit = { ...profileEdit }
    const data = new FormData(evt.target);
    const _company = data.get('company') || _profileEdit['info']['company']
    const _department = data.get('department') || _profileEdit['info']['department']
    const _location = data.get('location') || _profileEdit['info']['location']
    const _address = data.get('address') || _profileEdit['info']['address']
    const _officeNum = data.get('officeNum') || _profileEdit['info']['officeNum']
    const _info = {
      company: _company,
      department: _department,
      location: _location,
      address: _address,
      officeNum: _officeNum
    }
    setProfileEdit({ isOpen: false, info: _info })
  }
  // eamilList modal show
  const emailListModalShow = (id) => {
    const _emailList = { ...talkAboutEdit['emailList'][id] }
    if (!isEditMode) {
      _emailList['viewOpen'] = true
      _emailList['editOpen'] = false
    } else {
      _emailList['editOpen'] = true
      _emailList['viewOpen'] = false
    }
    setTalkModalData(_emailList)
  }
  // talk about content
  const TalkAboutParagraph = (txt, id, mode) => {
    return (
      <div className={mode ? 'd-flex align-items-center talk-txt dashed-border' : 'd-flex align-items-center talk-txt'} key={id}>
        <div style={{ backgroundImage: `url(${List})` }} className="list-img">
          {id < 9 ? `0${id + 1}` : id + 1}
        </div>
        <div className='description cursor-pointer' style={{ marginLeft: '11.5px' }} onClick={() => emailListModalShow(id)}>
          <span>{txt}</span>
          <span className="m-left-8">
            <img src={Vector} className="email-icon" alt="Vector" />
          </span>
        </div>
      </div>
    )
  }

  const handleKeyDown = (e) => {
    var el = e.target;
    setTimeout(function () {
      el.style.cssText = 'height:auto; padding:0';
      el.style.cssText = 'height:' + el.scrollHeight + 'px';
    }, 0);
  }

  const handleImg = (e) => {
    if(e.target.files[0]) {
          setImg({
              src: URL.createObjectURL(e.target.files[0]),
              alt: e.target.files[0].name
          });    
      }   
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
                {/* <form encType="multipart/form-data"> */}
                <div>
                  <div className={isEditMode ? 'photo-dashed-border position-relative photo-img-section' : 'position-relative photo-img-section'}>
                    {
                      isEditMode ?
                        <>
                          <label htmlFor="photo" className="form-img__file-label" className="cursor-pointer">
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
                          </label>
                        </> : null
                    }
                    <div className={isEditMode ? 'photo-detail custom-bg-color cursor-pointer' : 'photo-detail'}>
                        <div onClick={showProfileNameEdit}>
                          <p className={isEditMode ? 'text-white font-weight-bold' : 'font-weight-bold'}>{profileNamePos['name']}</p>
                          <p className={isEditMode ? 'text-white' : ''}>{profileNamePos['position']}</p>
                        </div>
                    </div>
                    {/* <img src={ProfileImg} alt="profile" className="profile-img" /> */}
                    <img src={src} alt={alt} className="profile-img"/>
                    {/* image upload */}
                    <input 
                        type="file" 
                        accept=".png, .jpg, .jpeg" 
                        id="photo"
                        className="visually-hidden"
                        onChange={handleImg}
                    />
                  </div>
                  </div>
                  {/* </form> */}
                  {/* image upload end */}
                  {
                    isEditMode && profileNamePos['isOpen'] &&
                    <>
                    <div className="name-position-edit">
                      <form className="position-relative" onSubmit={saveNamePosition}>
                        <button className="btn-save-edit-mode cursor-pointer">save</button>
                        <div>
                          <div className="name-section">
                            <p>Name</p>
                            <input type="text" className="common-input" name="name" defaultValue={profileNamePos['name']} />
                          </div>
                          <div className="position-section">
                            <p>Position</p>
                            <input type="text" className="common-input" name="position" defaultValue={profileNamePos['position']} />
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="layout" onClick={hideProfileNamePos}></div> 
                    </> 
                  }
                </div>
                <div className={isEditMode ? 'col-lg-7 dashed-border mb-2 position-relative d-flex flex-column justify-content-between' : 'col-lg-7 mb-2 position-relative'}>
                  {
                    isEditMode && isContactEdit &&
                    <>
                      <form className="contact-edit" onSubmit={contactChange}>
                        <button className="btn-save-edit-mode">Save</button>
                        <div className="title block">
                          <span className="require-txt">Title: Maximum 21 characters</span>
                          <input type="text" className="common-input" name="title" autoComplete="off" defaultValue={contactVal.title} autoFocus={true} maxLength="21" />
                        </div>
                        <div className="block content">
                          <span className="require-txt">Message: Maximum 240 characters</span>
                          <textarea maxLength="240" defaultValue={contactVal.msg} name="msg" autoComplete="off" className="common-textarea" onKeyDown={handleKeyDown} />
                        </div>
                        <div className="block content">
                          <span className="require-txt">Email Message: Maximum 31 characters</span>
                          <input type="text" className="common-input" maxLength="31" name="emailMsg" autoComplete="off" defaultValue={contactVal.emailMsg} />
                        </div>
                      </form>
                      <div className="layout" onClick={() => setIsContactEdit(false)}></div>
                    </>
                  }
                  <div className='cursor-pointer mb-3' onClick={contactDisplay}>
                    <h2 className='title mb-4'>{contactVal.title}</h2>
                    <p className='description mb-0'>{contactVal.msg}</p>
                  </div>
                  <p className='similar-subject mb-0' onClick={showModal}>
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
                    talkAboutEdit['emailList'] && talkAboutEdit['emailList'].length > 0 && talkAboutEdit['emailList'].map((item, i) => (
                      TalkAboutParagraph(item['content'], i, isEditMode)
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
            <div className="profile-info-section desktop-view position-relative">
              {
                isEditMode && profileEdit['isOpen'] &&
                <>
                  <div className="profile-edit">
                    <form className="position-relative" onSubmit={profileSave}>
                      <button className="btn-save-edit-mode">Save</button>
                      <div className="row">
                        <div className="col-lg-4">
                          <h1>Company</h1>
                          <input type="text" name="company" autoComplete="off" defaultValue={profileEdit['info'] && profileEdit['info']['company']} />
                        </div>
                        <div className="col-lg-4">
                          <h1>Department</h1>
                          <input type="text" name="department" autoComplete="off" defaultValue={profileEdit['info'] && profileEdit['info']['department']} />
                        </div>
                        <div className="col-lg-4">
                          <h1>Location</h1>
                          <input type="text" name="location" autoComplete="off" defaultValue={profileEdit['info'] && profileEdit['info']['location']} />
                        </div>
                        <div className="col-lg-4">
                          <h1>Address</h1>
                          <textarea name="address" rows="4" defaultValue={profileEdit['info'] && profileEdit['info']['address']} />
                        </div>
                        <div className="col-lg-4">
                          <h1>Office number</h1>
                          <input type="text" name="officeNum" autoComplete="off" defaultValue={profileEdit['info'] && profileEdit['info']['officeNum']} />
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="layout" onClick={() => setProfileEdit({ ...profileEdit, isOpen: false })}></div>
                </>
              }
              <div className={isEditMode ? ' row dashed-border extra-style' : 'row mx-3'} onClick={showProfileEdit}>
                <div className="col-lg-4">
                  <h1>Company</h1>
                  <p className="mb-0">{profileEdit['info'] && profileEdit['info']['company']}</p>
                </div>
                <div className="col-lg-4">
                  <h1>Department</h1>
                  <p className="mb-0">{profileEdit['info'] && profileEdit['info']['department']}</p>
                </div>
                <div className="col-lg-4">
                  <h1>Location</h1>
                  <p className="mb-0">{profileEdit['info'] && profileEdit['info']['location']}</p>
                </div>
                <div className="col-lg-4">
                  <h1>Address</h1>
                  <p className="mb-0" style={{ width: '200px' }}>{profileEdit['info'] && profileEdit['info']['address']}</p>
                </div>
                <div className="col-lg-4">
                  <h1>Office number</h1>
                  <a href="#phone">{profileEdit['info'] && profileEdit['info']['officeNum']}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* section4 */}
        <div className="col-lg-5 qoutes-section px-4">
          <div className="position-relative">
            {
              isEditMode && qoutesEdit['isOpen'] &&
              <>
                <div className="qoutes-edit">
                  <div className="position-relative">
                    <button className="btn-save-edit-mode" onClick={() => setQoutesEdit({ ...qoutesEdit, isOpen: false })}>Save</button>
                    <div className="email-num-set">
                      <span className="require">Email Messages: Maximum 240 characters</span>
                      <div className="position-relative email-num-increase">
                        <div className="select-box">
                          <span>How many email messages</span>
                          <input type="text" className="email-num-input" value={qoutesEdit['list'].length} onChange={qoutesListChange} />
                        </div>
                      </div>
                    </div>
                    <div className="title">
                      <input type="text" className="common-input" value={qoutesEdit['title']} onChange={(evt) => setQoutesEdit({...qoutesEdit, title: evt.target.value})} />
                    </div>
                  </div>
                </div>
                <div className="layout" onClick={hideQuotesEdit}></div>
              </>
            }
            <p className={isEditMode ? 'title mb-4 dashed-border cursor-pointer' : 'title mb-4 mt-4'} onClick={showQuotes}>{qoutesEdit['title']}</p>
          </div>
          {
            qoutesEdit['list'] && qoutesEdit['list'].length > 0 && qoutesEdit['list'].map((item, i) => (
              <div className="position-relative" key={i} >
                <div className={isEditMode ? 'dashed-border cursor-pointer' : ''} style={{ marginBottom: '3rem' }} onClick={() => showItemEdit(item.id)}>
                  <div className='content font-weight-bold'><Markup content={item['content']} /></div>
                  <p className='title'>{item['name']}</p>
                </div>
                {isEditMode
                  && selectedId === item.id
                  && <QoutesEdit content={item} qoutesEdit={qoutesEdit} setQoutesEdit={setQoutesEdit} index={i} id={selectedId} setId={setSelectedId} />}
              </div>
            ))
          }
        </div>
        {/* mobile view for section3 */}
        <div className="profile-info-section mobile-view position-relative">
              {
                isEditMode && profileEdit['isOpen'] &&
                <>
                  <div className="profile-edit">
                    <form className="position-relative" onSubmit={profileSave}>
                      <button className="btn-save-edit-mode">Save</button>
                      <div className="row">
                        <div className="col-lg-4">
                          <h1>Company</h1>
                          <input type="text" name="company" autoComplete="off" defaultValue={profileEdit['info'] && profileEdit['info']['company']} />
                        </div>
                        <div className="col-lg-4">
                          <h1>Department</h1>
                          <input type="text" name="department" autoComplete="off" defaultValue={profileEdit['info'] && profileEdit['info']['department']} />
                        </div>
                        <div className="col-lg-4">
                          <h1>Location</h1>
                          <input type="text" name="location" autoComplete="off" defaultValue={profileEdit['info'] && profileEdit['info']['location']} />
                        </div>
                        <div className="col-lg-4">
                          <h1>Address</h1>
                          <textarea name="address" rows="4" defaultValue={profileEdit['info'] && profileEdit['info']['address']} />
                        </div>
                        <div className="col-lg-4">
                          <h1>Office number</h1>
                          <input type="text" name="officeNum" autoComplete="off" defaultValue={profileEdit['info'] && profileEdit['info']['officeNum']} />
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="layout" onClick={() => setProfileEdit({ ...profileEdit, isOpen: false })}></div>
                </>
              }
              <div className={isEditMode ? ' row dashed-border extra-style' : 'row mx-3'} onClick={showProfileEdit}>
                <div className="col-lg-4">
                  <h1>Company</h1>
                  <p className="mb-0">{profileEdit['info'] && profileEdit['info']['company']}</p>
                </div>
                <div className="col-lg-4">
                  <h1>Department</h1>
                  <p className="mb-0">{profileEdit['info'] && profileEdit['info']['department']}</p>
                </div>
                <div className="col-lg-4">
                  <h1>Location</h1>
                  <p className="mb-0">{profileEdit['info'] && profileEdit['info']['location']}</p>
                </div>
                <div className="col-lg-4">
                  <h1>Address</h1>
                  <p className="mb-0" style={{ width: '200px' }}>{profileEdit['info'] && profileEdit['info']['address']}</p>
                </div>
                <div className="col-lg-4">
                  <h1>Office number</h1>
                  <a href="#phone">{profileEdit['info'] && profileEdit['info']['officeNum']}</a>
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
      {/* Contact modal */}
      <ViewModal viewModal={contactEditModal} setViewModal={setContactEditModal} isFlag="contact" />
      <EditModal editModal={contactEditModal} setEditModal={setContactEditModal} isFlag="talk" />

      {/* Talk modal */}
      { Object.keys(talkModalData).length > 0 && talkModalData['viewOpen'] && <ViewModal viewModal={talkModalData} setViewModal={setTalkModalData} isFlag="contact" />}
      { Object.keys(talkModalData).length > 0 && talkModalData['editOpen'] && <EditModal editModal={talkModalData} setEditModal={setTalkModalData} isFlag="talk" />}
    </div>
  )
}

export default Profile;