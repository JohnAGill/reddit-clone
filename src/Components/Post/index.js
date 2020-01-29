import React from 'react'
import moment from 'moment'
import './styles.scss'

export default props => {
  const diff = moment.unix(props.entry.timeStamp).fromNow()
  return (
    <div className="post-container">
      <div className="post-vote-container">
        <div onClick={() => props.upVote()} className="post-up-vote-button">
          ^
        </div>
        <p>{props.entry.upVotes - props.entry.downVotes}</p>
        <div onClick={() => props.downVote()} className="post-down-vote-button">
          ^
        </div>
      </div>
      <div className="post-content-container">
        <div className="post-top-content-container">
          <p onClick={props.onSubClick} className="post-top-sub-text">
            r/{props.entry.sub}
          </p>
          <p className="post-top-user-name-text">u/{props.entry.userName}</p>
          <p className="post-top-user-name-text">{diff}</p>
        </div>
        <p>{props.entry.title}</p>
        <p>{props.entry.body}</p>
      </div>
    </div>
  )
}
