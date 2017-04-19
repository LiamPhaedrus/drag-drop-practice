import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Bag from './Bag';

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
        this.setState({ buckets: [...this.state.buckets, ...responseData] })
      })
  }

  render() {
    let buckets = this.state.buckets.map(bucket=> {
      return(
        <div
          key={"bucket" + bucket.id}
          id={bucket.id}
          className="bucket"
        >
        A Bucket
        </div>
      )
    })
    return(
      <div className="bucket-page">
        {buckets}
        <div className="bag">
          <Bag />
        </div>
      </div>
    )
  }
}

export default Buckets;
