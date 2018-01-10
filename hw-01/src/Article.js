import React, { Component } from 'react';

class Article extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <p>{this.props.body}</p>
        <h5>{this.props.author}</h5>
      </div>
    );
  }
}

export default Article;