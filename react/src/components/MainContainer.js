import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Bag from './Bag';
import Bucket from './Bucket';
import Ball from './Ball';
// need to change thing into an actual location handler. so that bag only inherits unplaced balls and each bucket gets any balls that have an existing bucket_id
class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buckets: [],
      balls: [],
      things: []
    }

    this.handleAdd = this.handleAdd.bind(this)
  }

  componentDidMount() {
    fetch('/api/v1/buckets')
      .then(response => response.json())
      .then(data => {
        this.setState({ buckets: [...this.state.buckets, ...data] })
      })
    fetch('/api/v1/balls')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({ balls: [...this.state.balls, ...data] })
      })

  }

  handleAdd(arg) {
    this.setState({ things: this.state.things.concat([arg]) })
  }

  render() {
    let buckets = this.state.buckets.map(bucket=> {
      return(
        <Bucket
          key={"bucket" + bucket.id}
          id={bucket.id}
          handleAdd={this.handleAdd}
          things={this.state.things}
        />
      )
    })

    return(
      <div className="main-container">
        {buckets}
        <div className="bag">
          <Bag
            balls={this.state.balls}
          />
        </div>
      </div>
    )
  }
}

export default DragDropContext(HTML5Backend)(MainContainer);
