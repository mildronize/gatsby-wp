import React, { Component } from "react";
import { Link, graphql } from "gatsby";
import "./../styles/index.scss";
import PageLayout from "../components/layouts/PageLayout";
import PostList from "../components/PostList";

class BlogPage extends Component {
  render() {
    const data = this.props.data;
    console.log(data.allWordpressPost.edges);
    return (
      <PageLayout>
        <section>
          <h1>Archive</h1>
          <PostList posts={data.allWordpressPost.edges} />
        </section>
      </PageLayout>
    );
  }
}

export default BlogPage;

export const pageQuery = graphql`
  query {
    allWordpressPost {
      edges {
        node {
          title
          date
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
