import React, { useState } from 'react'
import ImageUploader from 'react-images-upload'

import FloatingLabel from '../FloatingLabelInput'
import Button from '../Button'
import './styles.scss'

export default props => {
  const [postTitle, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [image, setImage] = useState('')
  return (
    <div className="new-post-modal-container">
      <div onClick={() => props.close()} className="new-post-modal-close-container">
        <span className="new-post-modal-close">X</span>
      </div>
      <div className="new-post-modal-header-container">
        <p className="new-post-modal-header-text">{props.title}</p>
      </div>
      <div className="new-post-modal-inputs-container">
        <div className="new-post-modal-username-container">
          <FloatingLabel id="title" name="title" placeholder="title" type="text" value={postTitle} onChange={evt => setTitle(evt.currentTarget.value)} />
        </div>
        <div className="new-post-modal-password-container">
          <FloatingLabel component="textarea" id="content" name="content" placeholder="content" type="text" value={content} onChange={evt => setContent(evt.currentTarget.value)} />
        </div>
        <ImageUploader withIcon buttonText="Choose images" onChange={selectedImage => setImage(selectedImage)} imgExtension={['.jpg', '.png']} maxFileSize={5242880} withPreview />
      </div>
      <div className="new-post-modal-button-container">
        <Button title={props.buttonTitle} onClick={() => props.submit(postTitle, content, image)} solid large />
      </div>
      {props.error ? (
        <div className="new-post-modal-error-container">
          <p>An Error occured, {props.error}</p>
        </div>
      ) : null}
    </div>
  )
}
