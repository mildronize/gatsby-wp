import React, { Component } from "react"
import { graphql } from "gatsby"
import PageLayout from "../components/layouts/PageLayout"

class Page extends Component {
  render() {
    const StaticPage = this.props.data.wordpressPage

    return (
      <PageLayout>
        <article
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: StaticPage.content,
              }}
            />
      </PageLayout>
    )
  }
}

export default Page

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
    }
    site {
      id
      siteMetadata {
        title
        subtitle
      }
    }
  }
`
