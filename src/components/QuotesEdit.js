import React, { useEffect, useState } from 'react'
import CustomTextEditor from './TextEditor'

const Quotes = (props) => {
  const { content, qoutesEdit, setQoutesEdit, id, setId, index } = props
  const [item, setItem] = useState({})

  useEffect(() => {
    setItem(content)
  }, [content])

  // text area scroll remove
  const handleKeyDown = (e) => {
    var el = e.target;
    setTimeout(function () {
      el.style.cssText = 'height:auto; padding:0';
      el.style.cssText = 'height:' + el.scrollHeight + 'px';
    }, 0);
  }

  // quotes data save
  const saveQuotesData = () => {
    const _qoutesEdit = [...qoutesEdit['list']]
    _qoutesEdit[index] = { ...item }
    setQoutesEdit({ ...qoutesEdit, list: _qoutesEdit })
    setId(0)
  }

  // client name changing
  const handleChange = (evt) => {
    setItem({ ...item, name: evt.target.value })
  }

  return (
    <>
      <div className="quotes-item-edit">
        <div className="position-relative main-block">
          <button className="btn-save-edit-mode" onClick={saveQuotesData}>Save</button>
          <div className="require-section">
            <span>Qoutes from client:&nbsp;&nbsp;</span>
            <span>Maximum  500 characters</span>
          </div>
          <div className="content">
            <div>
              <textarea
                className="common-textarea"
                value={item['content']}
                onChange={(evt) => setItem({ ...item, content: evt.target.value })}
                maxLength="500"
                onKeyDown={handleKeyDown}
              />
            </div>
            <div className="emphase-content">
              <span className="emphase-txt">{item['empaseContent']}</span>
              <CustomTextEditor />
            </div>
          </div>
          <div className="client-name-part">
            <h1>Client Name</h1>
            <input type="text" className="common-input" value={item['name']} onChange={handleChange} />
          </div>
        </div>
      </div>
      <div className="layout" onClick={() => setId(0)}></div>
    </>
  )
}

export default Quotes