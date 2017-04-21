import React, { Component } from 'react';
import Ball from './Ball';

class Bag extends Component {
  render() {
    let balls = this.props.balls.map(ball=> {
      return(
        <Ball
          key={"ball" + ball.id}
          id={ball.id}
          name={"ball" + ball.id}
        />
      )
    })
    return (
      <div>
        {balls}
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
