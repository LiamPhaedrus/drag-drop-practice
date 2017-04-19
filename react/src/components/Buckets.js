import React, { Component } from 'react';


class Buckets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buckets: []
    }
  }

  componentDidMount() {
    fetch('/api/v1/buckets')
      .then(response => response.json())
      .then(responseData => {
        this.setState({ buckets: [...this.state.buckets, ...responseData.buckets] })
      })
  }

  render() {

    return(
      <div className="bucket-page">
        <h1>Hello there!</h1>
      </div>
    )
  }
}

export default Buckets;
