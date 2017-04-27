import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Bag from './Bag';
import Bucket from './Bucket';
import Ball from './Ball';
import DropContainer from './DropContainer'

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buckets: [],
      balls: []
    }

    this.handleAdd = this.handleAdd.bind(this)
    this.handleSpotAdd = this.handleSpotAdd.bind(this)
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
        this.setState({ balls: [...this.state.balls, ...data] })
      })
  }

  handleAdd(ball, bucket) {
    let payload = {ball, bucket_id: bucket, spot: null}
    fetch(`/api/v1/balls/${ball.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(data => {
      this.setState({ balls: data.balls, buckets: data.buckets })
    })
  }

  handleSpotAdd(ball, spotId) {
    let payload = {ball, bucket_id: 2, spot: spotId}
    fetch(`/api/v1/balls/${ball.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(data => {
      console.log(data.balls)
      this.setState({ balls: data.balls, buckets: data.buckets })
    })
  }

  render() {

    let unplacedBalls = []
    this.state.balls.forEach((ball)=>{
      if (ball.bucket_id === null) {
        unplacedBalls.push(ball)
      }
    })

    let buckets = this.state.buckets.map(bucket=> {
      let filterById = (obj) => {
        return bucket.balls.includes(obj.id)
      }
      let bucketBalls = this.state.balls.filter(filterById)
      return(
        <div className='bucket' key={"bucket" + bucket.id}>
          <Bucket
            id={bucket.id}
            handleAdd={this.handleAdd}
            balls={bucketBalls}
          />
        </div>
      )
    })

    return(
      <div className="main-container">
        <h1>Drag and Drop</h1>
        {buckets}
        <div>
          <Bag
            balls={unplacedBalls}
            id={null}
            handleAdd={this.handleAdd}
          />
        </div>
        <DropContainer
          handleAdd={this.handleSpotAdd}
          bucketBalls={[]}
        />
      </div>
    )
  }
}

export default DragDropContext(HTML5Backend)(MainContainer);
