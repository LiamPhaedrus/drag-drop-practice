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
      arr.push(
        <div className='spot' key={"spot" + i}>
          <Bucket
            id={i}
            handleAdd={this.props.handleAdd}
            balls={this.props.bucketBalls}
          />
        </div>)
    }
    return arr
  }

  render () {
    // let spotCount = 12
    // let spots = for (var i = 0; i < array.length; i++) {
    //   array[i]
    // }


    return(
      <div className='bucket'>
        {this.renderSpots(12)}
      </div>
    )
  }
}

export default DropContainer
