import React, { useEffect, useState } from 'react'
import BackgroundImg from "../assets/img/bg-img2.png";
import ProfileImg from "../assets/img/profileImg.png";
import Logo from "../assets/img/Logo.svg";
import Vector from "../assets/img/Vector.svg";
import List from "../assets/img/List.svg";
import Menu1 from '../assets/img/menu1.svg'
import CloseMenu from '../assets/img/CloseMenu.svg'
import Attached from '../assets/img/attach.svg'
// style
import "../assets/style/Profile.css";
// dumy data
import { TalkAboutData } from '../dumy/data'

const Profile = () => {
  const [talkAbout, setTalkAbout] = useState([])
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  useEffect(() => {
    if(TalkAboutData.length > 0) {
      setTalkAbout(TalkAboutData)
    }
  }, [TalkAboutData])

  return (
    <div
      className="container-fluid"
      style={{
        backgroundImage: `url(${BackgroundImg})`,
        backgroundSize: "cover",
        height: "100%",
        width: "100%",
      }}
    >
      {/* prfile-photo-title-bar */}
      <div className="profile-photo-title-bar">
        <p className="title">Profile Sample <span className="ml-3 percent">100%</span><span className="undeited">unedited</span></p>
      </div>
      <div className="row">
        <div className="col-lg-7">
          <div className="ml-3 border border-dark">
            <div className="row py-2 mx-4 py-4">
              <div className="col-lg-9 col-md-6 col-sm-7  pl-4 logo-lg hidden-sm">
                <img src={Logo} className="" alt="siteLogo" />
              </div>
            </div>
            {/* section1 */}
            <div className="border-bottom border-dark photo-section">
              <div className="row py-2 mx-4">
                <div className="col-lg-5">
                  <img src={ProfileImg} alt="profile" className="w-100" />
                </div>
                <div className="col-lg-7">
                  <h2 className="title mb-4">Why you should contact me</h2>
                  <p className="description">I have recently helped a 3 billion automative company in Germany reduce 30% of their company tax overhead.</p>
                  <p className="similar-subject">
                    <span>Contact me on similar subject now</span>
                    <span className="ml-3">
                      <img src={Vector} alt="Vector" />
                    </span>
                  </p>
                </div>
              </div>
            </div>
            {/* section2 */}
            <div className="talk-about-section border-bottom border-dark">
              <div className="row py-2 mx-4">
                <div className="col-lg-12 mt-4 mb-3">
                  <h2 className="title">What we can talk about</h2>
                    {
                      talkAbout && talkAbout.map((item, i) => (
                        TalkAboutParagraph(item.content, i)
                      ))
                    }
                </div>
              </div>
            </div>
            {/* section3 */}
            <div className="profile-info-section">
              <div className="row py-2 mx-4">
                <div className="col-lg-4 mt-3">
                    <h1>Company</h1>
                    <p className="mb-0">OnTheGo Accountants</p>
                </div>
                <div className="col-lg-4 mt-3">
                    <h1>Department</h1>
                    <p className="mb-0">Tech & Growth</p>
                </div>
                <div className="col-lg-4 mt-3">
                    <h1>Location</h1>
                    <p className="mb-0">Birmingham</p>
                </div>
                <div className="col-lg-4 mt-3">
                    <h1>Address</h1>
                    <p className="mb-0">The Colmore Building</p>
                    <p className="mb-0">20 Colmore Circus Queensway</p>
                    <p className="mb-0">Birmingham, B4 6AT</p>
                </div>
                <div className="col-lg-4 mt-3">
                    <h1>Office number</h1>
                    <a href="#">03330 067 123</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* section4 */}
        <div className="col-lg-5 qoutes-section px-4">
          <p className="title mb-4">Qoutes from Clients <span className="font-weight-bold">About me</span></p>
          <p className="content font-weight-bold">“This is by far the best accounting service that I've ever used. A unique combination of quality,
            affordability and kindness. Virtually, this is the best experience you can have with any accounting firm.
            For our company (Eventera Ltd),
            <span className="emphases">they went above and beyond, having multiple calls explaining the whole system and providing high-quality advice when needed. Kudos for doing such a fantastic job!”</span>
          </p>
          <p className="title mb-5">Petros Topouzis, Founder : eventera.io</p>
          <p className="content font-weight-bold">I am very much satisfied with service provided by OnTheGo Accountants. Whenever I raise request or any query, I will get the information immediately.
            <span className="emphases">&nbsp;Personally, I say thanks to Omar for his service. I will recommend OnTheGo accounts to other colleagues.</span>
          </p>
          <p className="title mb-5">Viswa, Founder</p>
        </div>
      </div>
      {/* open Edit Menu */}
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
          <button className="btn-open-edit-mode"><strong>Open Edit Mode</strong></button>
        </div>
          
      </div>
    </div>
  )
}

// talk about content
const TalkAboutParagraph = (txt, id) => {
  return (
    <div className="d-flex mt-3" key={id}>
      <div>
        <img src={List} alt="List" />
      </div>
      <div className="description ml-3">
        <span>{txt}</span>
        <span className="ml-3">
          <img src={Vector} alt="Vector" />
        </span>
      </div>
    </div>
  )
}

export default Profile;