import React, { Component } from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'

import { getPosts, upVotePost, downVotePost } from '../../redux/actions/posts'
import Post from '../../Components/Post'
import './styles.scss'

class FrontPage extends Component {
  componentDidMount() {
    this.props.dispatch(getPosts())
  }

  render() {
    return (
      <div className="front-page-container">
        {_.map(this.props.posts, (post, sub) => {
          return _.map(post, (entry, id) => {
            return (
              <Post
                onSubClick={() => this.props.history.push(`r/${sub}`)}
                entry={entry}
                upVote={() => this.props.dispatch(upVotePost(sub, id))}
                downVote={() => this.props.dispatch(downVotePost(sub, id))}
              />
            )
          })
        })}
      </div>
    )
  }
}

export default connect(state => state.posts)(FrontPage)
