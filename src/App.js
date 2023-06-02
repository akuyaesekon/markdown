import React, { Component } from 'react';
import MarkdownIt from 'markdown-it';

class MarkdownPreviewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: ''
    };
  }

  handleChange = (event) => {
    this.setState({
      markdown: event.target.value
    });
  };

  render() {
    const markdownIt = new MarkdownIt();
    const html = markdownIt.render(this.state.markdown);

    return (
      <div>
        <textarea value={this.state.markdown} onChange={this.handleChange} />
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    );
  }
}

export default MarkdownPreviewer;