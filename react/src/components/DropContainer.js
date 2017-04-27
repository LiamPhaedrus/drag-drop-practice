import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Bucket from './Bucket';
import Ball from './Ball';

class DropContainer extends Component {
  constructor (props) {
    super(props)

    this.renderSpots = this.renderSpots.bind(this)
  }

  renderSpots (num) {
    let arr = []
    for (var i = 0; i < num; i++) {

      let spotBalls = this.props.balls.filter(ball=>{
        return ball.spot === i
      })

      arr.push(
        <Bucket
          key={this.props.bucket_id + "spot" + i}
          id={i}
          bucket_id={this.props.bucket_id}
          handleAdd={this.props.handleAdd}
          balls={spotBalls}
        />
      )
    }
    return arr
  }

  render () {
    return(
      <div className='bucket'>
        {this.renderSpots(this.props.size)}
      </div>
    )
  }
}

export default DropContainer
