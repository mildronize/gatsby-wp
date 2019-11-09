import React, { Component } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import { DateTime } from 'luxon'
import Config from '../config'
import Prism from 'prismjs';
import PageLayout from "../components/layouts/PageLayout"

class Post extends Component {

  componentDidMount() {
    Prism.highlightAll();
  }

  render() {
    const post = this.props.data.wordpressPost

    return (
      <PageLayout>
        <div>
          <h1 class="post-title" dangerouslySetInnerHTML={{ __html: post.title,  }}/>
            <p class="post-date">
              {
                DateTime.fromISO(post.date, { zone: Config.timezone }).toFormat('MMMM d, yyyy')
              }
              {/* <span id="viewer"></span> */}
            </p> 
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </PageLayout>
    )
  }
}

Post.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default Post

export const postQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      date
      content
    }
    site {
      siteMetadata {
        title
        subtitle
      }
    }
  }
`
