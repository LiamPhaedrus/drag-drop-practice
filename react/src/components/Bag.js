import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Knight from './Ball';

class Bag extends Component {
  render() {
    return (
      <div>
        <Knight />
      </div>
    );
  }
}

// Bag.propTypes = {
//   knightPosition: PropTypes.arrayOf(
//     PropTypes.number.isRequired
//   ).isRequired
// };

export default DragDropContext(HTML5Backend)(Bag);
