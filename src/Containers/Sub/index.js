import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { upVotePost, downVotePost } from '../../redux/actions/posts'
import { getSubInfo, getSubPosts, newPostModal, createNewPost } from '../../redux/actions/subs'
import Post from '../../Components/Post'
import Button from '../../Components/Button'
import NewPostModal from '../../Components/NewPostModal'

import './styles.scss'

class Sub extends Component {
  componentDidMount() {
    this.props.dispatch(getSubInfo(this.props.match.params.name))
    this.props.dispatch(getSubPosts(this.props.match.params.name))
  }

  render() {
    const sub = this.props.match.params.name
    return (
      <Fragment>
        {this.props.subs.newPostModal ? (
          <NewPostModal
            buttonTitle="CREATE POST"
            title="New Post"
            error={this.props.subs.newPostError}
            submit={(title, content, image) => this.props.dispatch(createNewPost(title, content, sub, image))}
            close={() => this.props.dispatch(newPostModal(false))}
          />
        ) : null}
        <div>
          <div className="sub-header-container">
            <div className="sub-header-content">
              <img alt="" className="sub-header-image" src={this.props.subs.subInfo.image} />
              <p className="sub-header-text">{this.props.subs.subInfo.title}</p>
            </div>
            <div className="sub-header-post-button">
              <Button title="NEW POST" onClick={() => this.props.dispatch(newPostModal(true))} />
            </div>
          </div>
          <div className="sub-post-container">
            {_.map(_.orderBy(this.props.subs.posts, ['timeStamp'], ['desc']), entry => {
              return <Post entry={entry} upVote={() => this.props.dispatch(upVotePost(sub, entry.uid))} downVote={() => this.props.dispatch(downVotePost(sub, entry.uid))} />
            })}
          </div>
        </div>
      </Fragment>
    )
  }
}

export default connect(state => ({ subs: state.subs }))(Sub)
