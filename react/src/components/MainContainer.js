import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Bag from './Bag';
import ChessSquare from './Bucket';
import Knight from './Ball';

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buckets: [],
      things: []
    }

    this.handleAdd = this.handleAdd.bind(this)
  }

  componentDidMount() {
    fetch('/api/v1/buckets')
      .then(response => response.json())
      .then(responseData => {
        this.setState({ buckets: [...this.state.buckets, ...responseData] })
      })
  }

  handleAdd(thing) {
    this.setState({ things: this.state.things.concat([thing]) })
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
        <ChessSquare
          key="C1"
          handleAdd={this.handleAdd}
          things={this.state.things}
        />
        <div className="bag">
          <Bag />
        </div>
      </div>
    )
  }
}

export default DragDropContext(HTML5Backend)(MainContainer);
