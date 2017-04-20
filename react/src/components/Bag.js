import React, { Component } from 'react';
import Knight from './Ball';

class Bag extends Component {
  render() {
    return (
      <div>
        <Knight
          name={'Bob'}
          key={'Bob'}
        />
        <Knight
          name={'Joe'}
          key={'Joe'}
        />
      </div>
    );
  }
}

// Bag.propTypes = {
//   knightPosition: PropTypes.arrayOf(
//     PropTypes.number.isRequired
//   ).isRequired
// };

export default Bag;
