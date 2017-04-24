import React, { Component } from 'react';
import { DragSource } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

const ItemTypes = {
  BALL: 'ball'
}

const ballSource = {
  beginDrag(props) {
    return {name: props.name, id: props.id};
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

class Ball extends Component {
  render() {
    const { connectDragSource, isDragging, name, color } = this.props;
    return connectDragSource(
      <div style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 25,
        fontWeight: 'bold',
        cursor: 'move',
        color: color
      }}>
        ◯
      </div>
    );
  }
}


// Ball.propTypes = {
//   connectDragSource: PropTypes.func.isRequired,
//   isDragging: PropTypes.bool.isRequired
// };


export default DragSource(ItemTypes.BALL, ballSource, collect)(Ball);
