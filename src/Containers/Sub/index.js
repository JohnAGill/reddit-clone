import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { upVotePost, downVotePost } from '../../redux/actions/posts'
import { getSubInfo, getSubPosts } from '../../redux/actions/subs'
import Post from '../../Components/Post'
import './styles.scss'

class Sub extends Component {
  componentDidMount() {
    this.props.dispatch(getSubInfo(this.props.match.params.name))
    this.props.dispatch(getSubPosts(this.props.match.params.name))
  }

  render() {
    const sub = this.props.match.params.name
    return (
      <div>
        <div className="sub-header-container">
          <img alt="" className="sub-header-image" src={this.props.subs.subInfo.image} />
          <p className="sub-header-text">{this.props.subs.subInfo.title}</p>
        </div>
        <div className="sub-post-container">
          {_.map(this.props.subs.posts, (entry, id) => {
            return <Post entry={entry} upVote={() => this.props.dispatch(upVotePost(sub, id))} downVote={() => this.props.dispatch(downVotePost(sub, id))} />
          })}
        </div>
      </div>
    )
  }
}

export default connect(state => ({ subs: state.subs }))(Sub)
