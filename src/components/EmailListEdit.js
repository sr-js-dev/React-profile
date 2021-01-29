import React, { useState, useEffect } from 'react'
import { EmailItemCheck } from '../dumy/data'
import Arrow from '../assets/img/arrow.svg'

const EmailListEdit = (props) => {
  const { setIsTalkEdit, talkAboutEdit, setTalkAboutEdit } = props
  const [emailNum, setEmailNum] = useState(0)
  const [tempEmailList, setTempEmailList] = useState([])
  const [title, setTitle] = useState('')
  const [isShowSelect, setIsShowSelect] = useState(false)

  useEffect(() => {
    setTempEmailList(talkAboutEdit['emailList'])
    setEmailNum(talkAboutEdit['emailList'].length)
    setTitle(talkAboutEdit['title'])
  }, [talkAboutEdit])


  // email count change
  const emailNumSet = (index) => {
    setEmailNum(index)
    setIsShowSelect(false)
    if (index === "") return;
    let val = parseInt(index)
    let len = parseInt(tempEmailList.length)
    if (len > val) {
      let _tempEmailList = [...tempEmailList];
      let arr = _tempEmailList.slice(0, val)
      setTempEmailList(arr)
    } else {
      let _tempEmailList = [...tempEmailList];
      for (let i = len; i < val; i++) {
        const tempObj = {
          id: `${i + 1}`,
          content: `Talk about your company’s goals and find out how our firm services can help boost your business`,
          type: EmailItemCheck,
          viewOpen: false,
          editOpen: false,
        }
        _tempEmailList[i] = tempObj
      }
      setTempEmailList(_tempEmailList)
    }
  }

  // save form data
  const hideSaveForm = () => {
    setIsTalkEdit(false)
    const _talkAboutEdit = { ...talkAboutEdit }
    _talkAboutEdit['title'] = title
    _talkAboutEdit['emailList'] = tempEmailList
    setTalkAboutEdit(_talkAboutEdit)
  }

  // email content change
  const handleChange = (evt, index) => {
    const _tempEmailList = [...tempEmailList]
    _tempEmailList[index]['content'] = evt.target.value
    setTempEmailList(_tempEmailList)
  }

  const handleKeyDown = (e) => {
    var el = e.target;
    setTimeout(function () {
      el.style.cssText = 'height:auto; padding:0';
      el.style.cssText = 'height:' + el.scrollHeight + 'px';
    }, 0);
  }

  return (
    <div className="talk-about-edit">
      <div className="position-relative">
        <button onClick={hideSaveForm} className="btn-save-edit-mode">Save</button>
        <div className="title">
          <span>Title: Maximum  21 characters</span>
          <input type="text" name="title" autoFocus={true} maxLength="21" value={title} onChange={(evt) => setTitle(evt.target.value)} />
        </div>
        <div className="content">
          <div className="email-num-set">
            <span className="require">Email Messages: Maximum 240 characters each</span>
            <div className="position-relative email-num-increase">
              <div className="select-box">
                <div className="cursor-pointer" onClick={() =>setIsShowSelect(!isShowSelect)}>
                  <span>How many email messages</span>
                  <span className="ml-2">{emailNum}</span>
                  <span className="ml-1"><img src={Arrow} className="arrow" alt="arrow" style={{ transform: isShowSelect ? 'rotate(-180deg)' : 'rotate(0deg)' }} /></span>
                </div>
                {
                  isShowSelect &&
                  <ul className="email-list cursor-pointer">
                    {
                      [...Array(6)].map((item, i) => (
                        <li key={i} onClick={() => emailNumSet(i+1)}>{i+1}</li>
                      ))
                    }
                  </ul>
                }
              </div>
            </div>
          </div>
          <div className="email-display">
            {
              tempEmailList && tempEmailList.length > 0 && tempEmailList.map((item, i) => (
                <textarea key={i} value={item['content']} maxLength="240" onChange={(evt) => handleChange(evt, i)} onKeyDown={handleKeyDown} />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmailListEdit