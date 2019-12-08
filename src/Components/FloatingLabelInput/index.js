import React from 'react'
import FloatingLabel from 'floating-label-react'
import './styles.scss'

export default props => (
  <FloatingLabel id={props.id} name={props.name} placeholder={props.placeholder} type={props.type} value={props.value} onChange={evt => props.onChange(evt)} />
)
