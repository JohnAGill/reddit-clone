import React, { useState } from 'react'
import ImageUploader from 'react-images-upload'

import FloatingLabel from '../FloatingLabelInput'
import Button from '../Button'
import './styles.scss'

export default props => {
  const [subName, setSubName] = useState('')
  const [image, setImage] = useState('')
  return (
    <div className="new-sub-modal-container">
      <div onClick={() => props.close()} className="new-sub-modal-close-container">
        <span className="new-sub-modal-close">X</span>
      </div>
      <div className="new-sub-modal-header-container">
        <p className="new-sub-modal-header-text">{props.title}</p>
      </div>
      <div className="new-sub-modal-inputs-container">
        <div className="new-sub-modal-username-container">
          <FloatingLabel id="subName" name="subName" placeholder="subName" type="text" value={subName} onChange={evt => setSubName(evt.currentTarget.value)} />
        </div>
        <ImageUploader withIcon buttonText="Choose images" onChange={selectedImage => setImage(selectedImage)} imgExtension={['.jpg', '.png']} maxFileSize={5242880} withPreview />
      </div>
      <div className="new-sub-modal-button-container">
        <Button title="CREATE" onClick={() => props.submit(subName, image)} solid large />
      </div>
      {props.error ? (
        <div className="new-sub-modal-error-container">
          <p>An Error occured, {props.error}</p>
        </div>
      ) : null}
    </div>
  )
}
