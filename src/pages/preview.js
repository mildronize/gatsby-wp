import React, { Component } from 'react'
import Helmet from 'react-helmet'
import fetch from 'isomorphic-unfetch'
import Config from '../config';
import QueryString from 'query-string';
import PageLayout from '../components/layouts/PageLayout';
import { DateTime } from 'luxon'
import Prism from 'prismjs';
import 'prismjs/components/prism-python';

export default class PreviewPage extends Component {

  state = {
     post: {
       title: "",
       content: ""
     },
     errorMsg: null
  };

  async componentDidMount(){
    await this.loadData();
   
  }

  componentDidUpdate(){
    Prism.highlightAll();
  }

  async loadData(){
    const parsed = QueryString.parse(window.location.search);
    const { id } = parsed;
    try {
      const response = await fetch(`${Config.WPAPI.previewById}/${id}`);
      const data = await response.json();
      if ('message' in data){
        this.setState({ errorMsg: data.message });
        console.log(data.message);
      }else if(data.id == null){
        this.setState({ errorMsg: "The preview isn't available!" });
      }else {
        this.setState({
          post: data
        });
      }
      
    } catch (error) { 
     console.log(error);
    }
    console.log(this.state.errorMsg);
  }

  render () {
    const { title, content, date, errorMsg } = this.state.post

    return (
      <PageLayout>
        <Helmet>
          <title>{`Preview: ${title}`}</title>
        </Helmet>
        <center><h3 className="preview-header">-- Preview Mode --</h3></center>
        <h1 class="post-title" dangerouslySetInnerHTML={{ __html: title,  }}/>
        <p class="post-date">
              {date}
              {/* <span id="viewer"></span> */}
            </p> 
        {errorMsg!=null?<blockquote><p>{errorMsg}</p></blockquote>:<></>}
        <div
          dangerouslySetInnerHTML={{ __html:  content }}
        />
        <div>
        </div>
        
      </PageLayout>
    )
  }
}
