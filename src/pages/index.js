import React, { Component } from "react"
import { Link, graphql } from "gatsby"
import PageLayout from "../components/layouts/PageLayout"
import PostList from "../components/PostList"


class Homepage extends Component {
  render() {
    const data = this.props.data

    return (
      <PageLayout>
  
        <span
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: data.wordpressPage.content,
            }}
          />
        <hr />
        <div className="page-section-header">Latest Posts</div>
        <PostList posts={data.allWordpressPost.edges} />
        <center><Link to="/blog/">All blog posts</Link></center>
      </PageLayout>
    )
  }
}

export default Homepage

export const pageQuery = graphql`
  query {
    wordpressPage(slug: {eq: "welcome"}) {
      id
      slug
      content
    }
    allWordpressPost {
      edges {
        node {
          title
          date
          excerpt
          slug
        }
      }
    }
  }
`
