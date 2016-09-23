import React, { Component, PropTypes } from 'react';
import connect from '../../Lib/connect';
import { moveShip } from '../Actions/ship';

class MouseCapture extends Component {
  static propTypes = {
    onMoveShip: PropTypes.func.isRequired,
  };
  constructor(props) {
    super(props);
    this.onMouseMove = this.onMouseMove.bind(this);
  }
  onMouseMove(e) {
    // calculate the position of the mouse pointer relative to the stage
    // such that 0 is dead center horizontally
    const position = Math.trunc(
      (e.pageX - e.target.offsetLeft) - (e.target.offsetWidth / 2)
    );
    this.props.onMoveShip(position);
  }
  render() {
    return (
      <div onMouseMove={ this.onMouseMove }>
        { this.props.children }
      </div>
    )
  }
  static mapDispatchToProps = (dispatch, ownProps) => ({
    onMoveShip: (position) => dispatch(moveShip(position)),
  });
}

export default connect(MouseCapture);
