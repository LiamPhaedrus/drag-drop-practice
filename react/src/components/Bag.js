import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';
import { findDOMNode } from 'react-dom';
import Ball from './Ball';

const Types = {
  PIECE: 'ball'
};

const bagTarget = {
  canDrop(props, monitor) {
    const item = monitor.getItem();
    return true
  },

  hover(props, monitor, component) {

    const clientOffset = monitor.getClientOffset();
    const componentRect = findDOMNode(component).getBoundingClientRect();

    const isJustOverThisOne = monitor.isOver({ shallow: true });

    const canDrop = monitor.canDrop();
  },

  drop(props, monitor, component) {
    if (monitor.didDrop()) {
      return;
    }
    const item = monitor.getItem();
    props.handleAdd(item, component.props.id)
    return { moved: true };
  }
};

function collect(connect, monitor) {
  return {
    // Call this function inside render()
    // to let React DnD handle the drag events:
    connectDropTarget: connect.dropTarget(),
    // You can ask the monitor about the current drag state:
    isOver: monitor.isOver(),
    isOverCurrent: monitor.isOver({ shallow: true }),
    canDrop: monitor.canDrop(),
    itemType: monitor.getItemType()
  };
}

class Bag extends Component {
  render() {
    const { position } = this.props;
    const { isOver, canDrop, connectDropTarget, handleAdd } = this.props;
    let balls = this.props.balls.map(ball=> {
      return(
        <Ball
          key={"ball" + ball.id}
          id={ball.id}
          name={"ball" + ball.id}
          color={ball.color}
        />
      )
    })

    return connectDropTarget(
      <div className="bag">
        {balls}
      </div>
    );
  }
}

export default DropTarget(Types.PIECE, bagTarget, collect)(Bag);
