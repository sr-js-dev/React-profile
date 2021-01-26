import React, { useState, useEffect } from 'react'

const EmailListEdit = (props) => {
	const { setIsTalkEdit, talkAboutEdit, setTalkAboutEdit } = props
	const [emailNum, setEmailNum] = useState(0)
	const [tempEmailList, setTempEmailList] = useState([])
	const [title, setTitle] = useState('')

	useEffect(() => {
		setTempEmailList(talkAboutEdit['content'])
		setEmailNum(talkAboutEdit['content'].length)
		setTitle(talkAboutEdit['title'])
	}, [talkAboutEdit])

	const emailNumSet = (evt) => {
		setEmailNum(evt.target.value)
		if (evt.target.value === "") return;
		let val = parseInt(evt.target.value)
		let len = parseInt(tempEmailList.length)
		if (len > val) {
			let _tempEmailList = [...tempEmailList];
			let arr = _tempEmailList.slice(0, val)
			setTempEmailList(arr)
		} else {
			let _tempEmailList = [...tempEmailList];
			for (let i = len; i < val; i++) {
				_tempEmailList[i] = `${i + 1}. Talk about your company’s goals and find out how our firm services can help boost your business`;
			}
			setTempEmailList(_tempEmailList)
		}
	}

	// save form data
	const hideSaveForm = () => {
		setIsTalkEdit(false)
		const _talkAboutEdit = {}
		_talkAboutEdit['title'] = title
		_talkAboutEdit['content'] = tempEmailList
		setTalkAboutEdit(_talkAboutEdit)
	}

	// email content change
	const handleChange = (evt, index) => {
		const _tempEmailList = [...tempEmailList]
		_tempEmailList[index] = evt.target.value
		setTempEmailList(_tempEmailList)
	}

	return (
		<div className="talk-about-edit">
			<div className="position-relative">
				<button onClick={hideSaveForm} className="btn-save-edit-mode">Save</button>
				<div className="title">
					<span>Title: Maximum  21 characters</span>
					<input type="text" name="title" autoFocus={true} maxLength="21" placeholder={title} onChange={(evt) => setTitle(evt.target.value)} />
				</div>
				<div className="content">
					<div className="email-num-set">
						<span className="require">Email Messages: Maximum 240 characters each</span>
						<div className="position-relative email-num-increase">
							<div className="select-box">
								<span>How many email messages</span>
								<input type="text" className="email-num-input" value={emailNum} onChange={emailNumSet} />
							</div>
						</div>
					</div>
					<div className="email-display">
						{
							tempEmailList && tempEmailList.length > 0 && tempEmailList.map((item, i) => (
								<textarea key={i} placeholder={item} maxLength="240" onChange={(evt) => handleChange(evt, i)} />
							))
						}
					</div>
				</div>
			</div>
		</div>
	)
}

export default EmailListEdit