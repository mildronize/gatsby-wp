import React, { Component } from "react";
import { Link, graphql } from "gatsby";
import PageLayout from "../components/layouts/PageLayout";
// import PostList from "../components/PostList";
import { DateTime } from "luxon";
import Config from "../config";
// import QueryString from 'query-string';
// import PostContent from "../components/PostContent";
import Prism from "prismjs";
import "prismjs/components/prism-python";
import PostList from "../components/PostList";

class Homepage extends Component {
  state = {
    posts: []
  };

  // componentDidMount(){
  //     this.checkParam();
  // }

  // checkParam(){
  //   const parsed = QueryString.parse(window.location.search);
  //   const { p } = parsed;
  //   if(!(p === undefined || p === "" || p === null)){
  //     this.setState({ isPreview: true, pid: p });
  //   }
  // }

  render() {
    const data = this.props.data;

    return (
      <PageLayout>
        <section
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: data.wordpressPage.content
          }}
        />
        <hr />
        <section>
          <div className="page-section-header">Latest Posts</div>
          <PostList posts={data.allWordpressPost.edges} />
        </section>
      </PageLayout>
    );
  }
}

export default Homepage;

export const pageQuery = graphql`
  query {
    wordpressPage(slug: { eq: "welcome" }) {
      id
      slug
      content
    }
    allWordpressPost {
      edges {
        node {
          title
          date
          content
          slug
          tags {
            name
            slug
            id
          }
        }
      }
    }
  }
`;

class Post extends Component {
  componentDidMount() {
    Prism.highlightAll();
  }

  render() {
    const { post } = this.props;
    return (
      <article>
        <h1
          class="post-title"
          dangerouslySetInnerHTML={{ __html: post.node.title }}
        />
        <p class="post-date">
          {DateTime.fromISO(post.node.date, { zone: Config.timezone }).toFormat(
            "MMMM d, yyyy"
          )}
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.node.content }} />
      </article>
    );
  }
}
