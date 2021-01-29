import React, { useEffect, useState } from 'react'
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const Quotes = (props) => {
  const { content, qoutesEdit, setQoutesEdit, setId, index } = props
  const [item, setItem] = useState({})
  const [clientName, setClientName] = useState('')
  const [editorState, setEditorState] = useState('');

  useEffect(() => {
    setItem(content)
    setClientName(content['name'])
  }, [content])

  useEffect(() => {
    if (!item['content']) return
    const html = item['content'];
    const contentBlock = htmlToDraft(html);
    if (contentBlock) {
      const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
      const _editorState = EditorState.createWithContent(contentState);
      setEditorState(_editorState)
    }
  }, [item])

  // text editor data change
  const onEditorStateChange = (_editorState) => {
    setEditorState(_editorState)
  };

  // quotes data save
  const saveQuotesData = () => {
    const _qoutesEdit = [...qoutesEdit['list']]
    const _item = { ...item }
    _item['content'] = draftToHtml(convertToRaw(editorState.getCurrentContent()))
    _item['name'] = clientName
    _qoutesEdit[index] = { ..._item }
    setQoutesEdit({ ...qoutesEdit, list: _qoutesEdit })
    setId(0)
  }

  // client name changing
  const handleChange = (evt) => {
    setClientName(evt.target.value)
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
            <div className="custom-text-editor">
              <Editor
                editorState={editorState}
                wrapperClassName="demo-wrapper"
                editorClassName="demo-editor"
                onEditorStateChange={onEditorStateChange}
              />
            </div>
          </div>
          <div className="client-name-part">
            <h1>Client Name</h1>
            <input type="text" className="common-input" value={clientName} onChange={handleChange} />
          </div>
        </div>
      </div>
      <div className="layout" onClick={() => setId(0)}></div>
    </>
  )
}

export default Quotes