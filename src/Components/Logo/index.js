import React from 'react'
import history from '../../history'

export default props => <img alt="The Reddit Logo" style={{ height: 100, width: 100 }} src={props.source} onClick={() => history.push('/')} />
