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
    const posts = _.flatten(
      _.map(this.props.posts, post => {
        return _.reduce(
          post,
          (result, entry) => {
            return [...result, entry]
          },
          [],
        )
      }),
    )
    return (
      <div className="front-page-container">
        {_.map(_.orderBy(posts, ['timeStamp'], ['desc']), entry => {
          return (
            <Post
              onSubClick={() => this.props.history.push(`r/${entry.sub}`)}
              entry={entry}
              upVote={() => this.props.dispatch(upVotePost(entry.sub, entry.uid))}
              downVote={() => this.props.dispatch(downVotePost(entry.sub, entry.uid))}
            />
          )
        })}
      </div>
    )
  }
}

export default connect(state => state.posts)(FrontPage)
