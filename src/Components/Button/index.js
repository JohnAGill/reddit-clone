import React from 'react'
import classNames from 'classnames'
import './styles.scss'

export default ({ onClick, title, solid, large }) => {
  const classes = classNames('reddit-clone-button', {
    solid: solid,
    large: large,
  })
  const textClasses = classNames('reddit-clone-button-text', {
    large: large,
  })
  return (
    <button type="button" className={classes} onClick={() => onClick()}>
      <span className={textClasses}>{title}</span>
    </button>
  )
}
