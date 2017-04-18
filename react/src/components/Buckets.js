import React, { Component } from 'react';


class Buckets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  componentDidMount() {
    let bucket = this.props.params.id;
    fetch(`/api/v1/articles/${articleId}`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({ article: responseData })
      })
  }

  render() {
    return(
      <div className="bucket-page">

      </div>
    )
  }
}

export default Buckets;
