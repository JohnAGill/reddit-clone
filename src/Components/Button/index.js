import React from 'react'
import classNames from 'classnames'
import './styles.scss'

export default props => {
  const classes = classNames('reddit-clone-button', {
    solid: props.solid,
  })
  return (
    <button type="button" className={classes} onClick={() => props.onClick()}>
      {props.title}
    </button>
  )
}
