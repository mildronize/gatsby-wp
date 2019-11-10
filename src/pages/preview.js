import React, { Component } from 'react'
import Helmet from 'react-helmet'
import fetch from 'isomorphic-unfetch'
import Config from '../config';
import QueryString from 'query-string';
import PageLayout from '../components/layouts/PageLayout';
import PostContent from '../components/PostContent';

export default class PreviewPage extends Component {

  state = {
     post: {
       title: "",
       content: ""
     },
     errorMsg: ""
  };

  async componentDidMount(){
    await this.loadData();
   
  }

  // componentDidUpdate(){
  //   Prism.highlightAll();
  // }

  async loadData(){
    const parsed = QueryString.parse(window.location.search);
    const { id } = parsed;
    try {
      const response = await fetch(`${Config.WPAPI.previewById}/${id}`);
      const data = await response.json();
      // console.log(data);
      if ('message' in data){
        this.setState({ errorMsg: data.message });
        console.log(data.message);
      }else {
        this.setState({
          post: data
        });
      }
      
    } catch (error) { 
     console.log(error);
    }
  }

  render () {
    const { title, content } = this.state.post

    return (
      <PageLayout>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <h1 class="post-title" dangerouslySetInnerHTML={{ __html: title,  }}/>
        <h1>{this.state.errorMsg}</h1>
        {/* <div
          dangerouslySetInnerHTML={{ __html:  content }}
        /> */}
        <div>
        <PostContent htmlContent={content} />
        </div>
        
      </PageLayout>
    )
  }
}
