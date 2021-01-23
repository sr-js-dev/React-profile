import React, { Component } from "react";
import { Link, useHistory } from 'react-router-dom'
// image desktop
import Img1 from "../assets/img/Img-1.svg";
import Img2 from '../assets/img/ImgSec-2.png'
import Logo from "../assets/img/Logo.svg";
import Profile2 from "../assets/img/profil-2.svg";
import BackgroundImg from "../assets/img/bg-img2.png";
import BgVector from "../assets/img/vector-line.png";
import Fb from "../assets/img/fb.png";
import Twitter from "../assets/img/twitter.png";
import Linkedin from "../assets/img/linkedin.png";
import News from "../assets/img/news.png";
import Blog from "../assets/img/blogs.png";
import contentTop from '../assets/img/content-top.svg'
import BgGetStarted from '../assets/img/bg-get-started.svg'

// img mobile 
import imgMobile1 from '../assets/img/mobile/img-content-1.png'
import imgMobile2 from '../assets/img/mobile/img-content-2.png'
import imgMobile3 from '../assets/img/mobile/img-content-3.png'
import socmed1 from '../assets/img/mobile/socmed-1.png'
import twitMobile from '../assets/img/mobile/twitter.png'
import linkedinMobile from '../assets/img/mobile/linkedin.png'
import blogsMobile from '../assets/img/mobile/blogs.png'

// react bootstrap
import {Button} from 'react-bootstrap'

// style
import "../assets/style/Home.css";

export default class Home extends Component {
  render() {
    return (
      <>
      <div
        className="container-fluid"
        style={{
          backgroundImage: `url(${BackgroundImg})`,
          backgroundSize: "cover",
          height: "100%",
          width:"100%",
        }}
      >
        <div className="row py-2 mx-1 py-4">
          <div className="col-lg-9 col-md-6 col-sm-7  pl-4 logo-lg hidden-sm">
            <img src={Logo} className=""/>
          </div>
          <div className="col-lg-9 pl-2 hidden-md hidden-lg">
            <img src={Logo} className=""/>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-5 col-sm-12 col-12 d-none hidden-md-1 d-sm-inline">
            <div className="row px-4">
              <div className="col-lg-5 col-md-4 col-sm-4">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfQX-ZGJV_vxjcpySS7d_3WqEspJa453J7uiDQYUe_0ziOFjA/viewform" target="_blank">
                  <button type="button" className="btn-login" ><strong>Login</strong></button>
                </a>
              </div>
              <div className="col-lg-7 col-md-8 col-sm-8">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfQX-ZGJV_vxjcpySS7d_3WqEspJa453J7uiDQYUe_0ziOFjA/viewform" target="_blank">
                  <button className="btn-create-account"><strong>Create account</strong></button>
                  </a>
                {/* <Button className="btn-create-account">Create account</Button> */}
              </div>
            </div>
          </div>
        </div>

        {/* desktop and tablet */}
        <div className="row my-4 ">
          <div className="col-lg-12 col-md-12  text-center main-2 text-white">
            <div className="text container">
            <img src={contentTop} className="hidden-sm w-100 mb-5"/>
              <h3 className="hidden-lg lh-3 hidden-md f-30-sm">A better way to</h3>
              <h3 className="hidden-lg lh-3 hidden-md f-30-sm">to get inbound leads</h3>
              <p className="hidden-lg hidden-md lh-2 text-center mt-4">Grow Better Leads, Get Better Client,  </p>
              <p className="hidden-lg hidden-md lh-2 text-center">Achieve Better Client Experience.</p>
              <Link to="/profile"><button className="btn-sample-page hidden-sm"><strong>See sample page</strong></button></Link>
            </div>
            {/* show if screen mobile */}
            <div className="hidden-md row mx-2 hidden-lg my-4 pt-5">
              <div className="col-lg-12">
                <div className="row hidden-lg hidden-md px-2">
                  <div className="col-6">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfQX-ZGJV_vxjcpySS7d_3WqEspJa453J7uiDQYUe_0ziOFjA/viewform" target="_blank">
                    <button className="btn-login-sm border-none hidden-lg hidden-md"><strong>Login</strong></button>
                    </a>
                  </div>
                  <div className="col-6">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfQX-ZGJV_vxjcpySS7d_3WqEspJa453J7uiDQYUe_0ziOFjA/viewform" target="_blank">
                  <button className="btn-create-account-sm border-none hidden-lg hidden-md"><strong>Create account</strong></button>
                  </a>
                  </div>
                  <div className="col-12 text-center mt-5 hidden-md">
                    <Link to="/profile"><button className="btn-sample-page-sm border-none"><strong>See sample page</strong></button></Link>
                  </div>
                </div>
              </div>
            </div>
            {/* img desktop */}
            <div className="hidden-sm img-1 my-5">
              <img src={Img1} className="mt-2 mb-5 w-75" />
            </div>

            {/* img mobile  */}
            <div className="mx-2 hidden-md hidden-lg">
                <h3 className="px-2 text-left f-12">Create Contact Page</h3>
                <img src={imgMobile1} className="w-100 mb-2"/>
                <p className="text-white f-11 text-center">Easily create a <strong>smarter</strong> contact page with <strong>No Code</strong></p>
            </div>
          </div>
        </div>

        {/* section 2  */}
        <div className="row effect-1 py-5 ">
          <div className="col-lg-6 col-md-6 py-5 col-12 content-2">
            {/* desktop */}
            <h3 className="mx-5 pl-5 lh-2 mtop-8 pt-5 text-inbound-md text-inbound hidden-sm text-left">
              Inbound Lead Made 
            </h3>
            <h3 className="ml-5 pl-5 mb-4 text-inbound hidden-sm text-left">
            Easy for you and senders
            </h3>
            {/* mobile */}
            <h3 className="mx-4 px-4 color-cff2ee hidden-md hidden-lg text-center">
              Inbound Lead Made Easy for you and senders
            </h3>
            {/* desktop */}
            <p className="ml-5 px-5 text-left text-after-inbound hidden-sm text-white">
              Get contacted directly on specific subject that you wanted to be
              contacted about from your ContactPage. It{" "}
              <span className="color-old-red">reduces the noise</span> and{" "}
              <span className="color-old-blue">gives you only signals</span>. It
              will help you put a stop to unwanted, unsolicited and irrelevant
              noise in your mail.
            </p>
            {/* mobile */}
            <p className="mx-2 text-center hidden-md hidden-lg text-white my-3">
              Get contacted directly on specific subject that you wanted to be
              contacted about from your ContactPage. It{" "}
              <span className="color-old-red">reduces the noise</span> and{" "}
              <span className="color-old-blue">gives you only signals</span>. It
              will help you put a stop to unwanted, unsolicited and irrelevant
              noise in your mail.
            </p>
          </div>
          {/* desktop */}
          <div className="col-lg-6 col-md-6 py-5 mb-5 hidden-676 hidden-sm section-2">
            <img src={Profile2} className="pl-4 my-5 w-100 text-right " />
          </div>

          {/* img mobile  */}
          <div className="col-lg-12 mx-2 hidden-md hidden-lg text-center">
                <h3 className="mt-5 px-2 text-left f-12">People See Your Contact Profile</h3>
                <img src={imgMobile2} className="w-100 mb-2"/>
                <p className="text-white">www.bettercontact.me/<strong className="color-old-blue">You</strong></p>
            </div>
        </div>

        {/* section 3 */}
        <div className="row bg-section-3">
          <div
            className="col-lg-6 pr-5 bg-left hidden-sm py-5"
            style={{
              backgroundImage: `url(${BgVector})`,
              backgroundSize: "cover",
              height: "800px",
              width: "1000px"
              // width: "700px"
              // color: "#f5f5f5"
            }}
          > 
          {/* desktop */}
          <div className="row">
            <div className="col-lg-12 col-md-12">
            <h3 className="hidden-sm lh-3 mtop-11 ml-5 pl-5 pr3 mr-3 text-generate-leads text-left">
              Generate leads 
            </h3>
            <h3 className="hidden-sm lh-3  mb-4 ml-5 pl-5 pr3 text-generate-leads text-left">
              From any content Online 
            </h3>
            </div>
            </div>
            {/* mobile  */}
            <h3 className="hidden-md hidden-lg mt-5 mx-4 px-5 color-cff2ee text-center">
              Generate leads From any content Online
            </h3>
            <p className="ml-5 pl-5 mb-10 mr-3 text-white f-19 text-left">
              You can create a contact form on any content online through which
              people, including potential clients, investors, buyers, can reach
              out to you directly about subject matter that you have highlighted
              to have interest in.
            </p>

            {/* social media */}
            <div className="row my-2">
              <div className="col-lg-12 col-md-12 mt-3">
                <div className="row ml-2">
                  <div className="col-lg-6 col-md-5 col-sm-6 pl-5 ">
                    <div className="pl-4 flex-container">
                      <span className="mx-2">
                        <img src={News} className="w-39" />
                      </span>
                      <p className="text-gray my-2 f-16">News & Press releases</p>
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-6 col-sm-6">
                    <div className="flex-container">
                      <span className="mx-2">
                        <img src={Fb} className="w-39" />
                      </span>
                      <p className="text-gray my-2 f-16">Facebook</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-md-12 my-5 pl-5 ">
                <div className="row pl-3 ml-2">
                    <div className="col-lg-3 col-md-3 col-sm-3 pl-4 flex-container">
                    <span className="mx-1">
                        <img src={Twitter} className=" w-39" />
                      </span>
                      <p className="text-gray my-2 f-16">Twitter</p>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 pl-4 flex-container">
                    <span className="mx-1">
                        <img src={Linkedin} className=" w-39" />
                      </span>
                      <p className="text-gray my-2 f-16">Linkedin</p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 pl-4 flex-container">
                    <span className="mx-1">
                        <img src={Blog} className=" w-39" />
                      </span>
                      <p className="text-gray my-2 f-16">Blogs, Articles & Others</p>
                    </div>
                </div>
              </div>
            </div>
          </div>

          {/* mobile  */}
          <div className="col-lg-6 hidden-lg hidden-md col-sm-12 col-12">
             <h3 className=" mt-5 mx-5 color-cff2ee text-center">
              Generate leads From any content Online
            </h3>
            <p className="my-5 mx-1 text-white text-center">
            You can create a contact form on any content online through which people, including potential clients, investors, buyers, can reach out to you directly about   subject matter that you have highlighted to have interest in. 
            </p>
            <div className="row">
              <div className="col-lg-12 col-sm-12 col-12 px-4">
                <img src={socmed1} className="w-75 ml-5"/>
                <div className="row my-4">
                  <div className="col-sm-3 col-3 ">
                    <img src={twitMobile} className="w-75" />
                  </div>
                  <div className="col-sm-4 col-4 ">
                  <img src={linkedinMobile} className="w-75" />
                  </div>
                  <div className="col-sm-5 col-5 ">
                  <img src={blogsMobile} className="w-100" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* desktop */}
          <div className="col-lg-6 hidden-sm mtop-10  py-5">
            <div className="row pl-5 d-flex hidden-sm">
              <p className="col-lg-4 col-md-4 px-3  lh-1 f-15 text-white px-3 text-left"><strong>Create Contact Forms</strong></p>
              <p className="col-lg-8 col-md-8 lh-1 f-15 text-white text-right">Smarter <strong>contact</strong> forms with <strong>No Code</strong> on any content </p>
            </div>
            {/* img nanti digsanti */}
            {/* <div className="d-flex">
                            <p>Create Contact Forms</p>
                        </div> */}
            {/* desktop  */}
            <img src={Img2} className="pl-4 hidden-sm w-100 text-right" />


          </div>

          {/* mobile */}
          <div className="col-lg-12 mx-2  hidden-md hidden-lg text-center">
                <h3 className="mt-5 text-left px-4 f-12">Create Contact Forms</h3>
                <img src={imgMobile3} className="w-100 mb-2"/>
                <p className="text-white f-11 text-center">Easily create a <strong>smarter</strong> contact page with <strong>No Code</strong></p>
            </div>
        </div>

        {/* section 4 */}
        <div className="row"
          className=""
          style={{
            backgroundImage: `url(${BackgroundImg})`,
            backgroundSize: "cover",
            height: "100%",
            width: "100%"
            // color: "#f5f5f5"
          }}
        >
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 py-5 text-center section-4">
                  <div className="row mx-5">
                    <div className="col-lg-12 mt-3">

                    <img src={BgGetStarted} className="pt-5 hidden-sm w-75" />
                    </div>
                  </div>
                  <h3 className="f-easiest mx-3 hidden-md hidden-lg color-old-blue">Easiest & better way of doing inbound marketing  </h3>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfQX-ZGJV_vxjcpySS7d_3WqEspJa453J7uiDQYUe_0ziOFjA/viewform" target="_blank">
                  <button className="btn-get-started mt-3 hidden-sm mbot-8">Get Started</button>
                </a>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfQX-ZGJV_vxjcpySS7d_3WqEspJa453J7uiDQYUe_0ziOFjA/viewform" target="_blank">
                <button className="btn-get-started hidden-md hidden-lg my-3">Get Started</button>
                </a>
                </div>
        </div>

        {/* footer */}
        <div className="row bg-footer">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12 my-5">
              <div className="row">
                {/* desktop */}
                <div className="col-lg-6 col-md-12 hidden-sm col-12 mb-3 pl-4">
                  <div className="pl-2">
                  <img src={Logo} className=""/>
                    <h3 className="main-text-footer mt-3">© Copyright 2021 BetterContact LTD</h3>
                    <h3 className="main-text-footer">All rights reserved</h3>
                  </div>
                </div>
                {/* mobile  */}
                <div className="col-sm-12 col-12 hidden-md hidden-lg col-12 mb-5 ">
                  <div className="pl-2">
                  <img src={Logo} className=""/>
                    <h3 className="main-text-footer-mobile mt-3">© Copyright 2021 BetterContact LTD</h3>
                    <h3 className="main-text-footer-mobile ">All rights reserved</h3>
                  </div>
                </div>
                <div className="col-lg-2 px-4 col-md-4 col-4 menu-footer">
                  <h3 className="main-text-footer mb-4"><strong>Company</strong></h3>
                  <p>About</p>
                  <p>Jobs</p>
                  <p>Press Room</p>
                  <p><strong>Blog</strong></p>
                </div>
                <div className="col-lg-2 col-md-4 col-4 menu-footer">
                  <h3 className="main-text-footer mb-4"><strong>Legal</strong></h3>
                  <p>Term of Use</p>
                  <p>Privacy Policy</p>
                  <p>Legal Notice</p>
                  <p>GDPR</p>
                </div>
                <div className="col-lg-2 col-md-4 col-4 menu-footer-1">
                  <h3 className="main-text-footer mb-4"><strong>Product</strong></h3>
                  <p>Product Tour</p>
                  <p>Pricing</p>
                  <p>Help Center</p>
                  <p>Use Cases</p>
                </div>
              </div>
            </div>
            <div className="col-lg-12 hidden-sm cookies-bg mb-3">
              <div className="text-center my-2 content-cookies">
                <span>This website use cookies Read More</span>
                <button className="mx-2 px-3 btn-cookies"><strong>Accept cookies</strong></button>
              </div>
            </div>
        </div>
      </div>
      </>
    );
  }
}
