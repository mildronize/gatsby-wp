import React, { Component } from 'react'
// https://github.com/octalmage/jason.stallin.gs/blob/master/src/components/BlogContent.js#L11

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark as theme } from 'react-syntax-highlighter/dist/esm/styles/prism';
import HtmlToReact from 'html-to-react';
import he from 'he';

const HtmlToReactParser = HtmlToReact.Parser;
const isValidNode = () => true;
const getLanguageFromCssClass = cssClass => {
  if (cssClass == undefined || cssClass == null )return "";
  const classes = cssClass.split(' ');
  let target_class = "";
  classes.forEach(element => {
    if (element.indexOf("language")>=0){
      target_class = element;
      return 0;
    }
  });
  let language="";
  if(target_class!=""){
    language = target_class.replace('language-','');
  }
  return language;
};
const processNodeDefinitions = new HtmlToReact.ProcessNodeDefinitions(React);
const processingInstructions = [
  {
    // Replace <pre> with SyntaxHighlighter.
    shouldProcessNode: node => node.name && node.name === 'pre',
    processNode: (node, children, index) => {
      // Support <code> tags inside of <pre> tags.
      const nodeToProcess = node.children[0].name === 'code' ? node.children[0] : node;
      // console.log(node.attribs.class);
      console.log( getLanguageFromCssClass(node.children[0].attribs.class));
      const language = getLanguageFromCssClass(node.children[0].attribs.class);
      console.log(language);
      const content = he.decode(nodeToProcess.children.map(n => n.data).join(''));
      return (
        <SyntaxHighlighter
          key={index}
          language={language}
          style={theme}
          // codeTagProps={{ style: { lineHeight: '1.5em', fontSize: '0.9em' } }}
        >
          {content}
        </SyntaxHighlighter>
      );
    },
  },
  {
    shouldProcessNode: () => true,
    processNode: processNodeDefinitions.processDefaultNode,
  }];
const htmlToReactParser = new HtmlToReactParser();

// export default class PostContent extends Component {
const PostContent = ({ htmlContent }) => {

    // console.log(htmlContent);
    const newContent = htmlToReactParser.parseWithInstructions(
      htmlContent,
      isValidNode,
      processingInstructions,
    );

    return (
      <>
        {newContent}        
      </>
    )
  }

export default PostContent;

