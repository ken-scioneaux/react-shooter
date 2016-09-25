import React, { Component, PropTypes } from 'react';
import connect from '../../Lib/connect';
import { moveShip } from '../Actions/ship';

const MOUSE_STYLE = {
  cursor: 'none',
};

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
    const xPos = Math.trunc(e.pageX - window.innerWidth / 2);
    this.props.onMoveShip(xPos);
  }
  componentDidMount() {
    window.addEventListener('mousemove', this.onMouseMove);
  }
  componentWillUnmount() {
    window.removeEventListener('mousemove', this.onMouseMove);
  }
  render() {
    return (
      <div style={ MOUSE_STYLE }>
        { this.props.children }
      </div>
    )
  }
  static mapDispatchToProps = (dispatch, ownProps) => ({
    onMoveShip: (position) => dispatch(moveShip(position)),
  });
}

export default connect(MouseCapture);
