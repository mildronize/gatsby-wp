import React, { Component } from "react";
import { Link, graphql } from "gatsby";
import { url } from "../config";
import "./../styles/index.scss";
import PageLayout from "../components/layouts/PageLayout";

class BlogPage extends Component {
  render() {
    const data = this.props.data;

    return (
      <PageLayout>
        <section>
          <h1>Archive</h1>

          {data.allWordpressPost.edges.map(({ node }) => (
            <div key={node.slug}>
              <Link to={url(node.slug)}>
                <h2>{node.title}</h2>
              </Link>
              <span
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                  __html: node.excerpt
                }}
              />
            </div>
          ))}
        </section>
      </PageLayout>
    );
  }
}

export default BlogPage;

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
          excerpt
          slug
        }
      }
    }
  }
`;
