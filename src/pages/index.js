import React, { Component } from "react"
import { Link, graphql } from "gatsby"
import PageLayout from "../components/layouts/PageLayout"
import PostList from "../components/PostList"
import QueryString from 'query-string';
import PostContent from "../components/PostContent";

class Homepage extends Component {

  state = {
    isPreview: false,
    pid: null,
  }

  componentDidMount(){
      this.checkParam();
  }

  checkParam(){
    const parsed = QueryString.parse(window.location.search);
    const { p } = parsed;
    if(!(p === undefined || p === "" || p === null)){
      this.setState({ isPreview: true, pid: p });
    }
  }

  render() {
    const data = this.props.data

    return (
      <PageLayout>
        {this.state.isPreview?
        <PostContent p={this.state.pid} />:
          <>
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
            </>
          }
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
