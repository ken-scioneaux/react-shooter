import React, { Component, PropTypes } from 'react';

class VAlign extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  };

  render() {
    const { children, className } = this.props;
    return (
      <div className={className || ''} style={{ display: 'table', height: '100%' }}>
        <div style={{ display: 'table-cell', verticalAlign: 'middle', height: '100%' }}>
          {children}
        </div>
      </div>
    );
  }
}

export default VAlign;
