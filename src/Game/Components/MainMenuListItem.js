import React, { Component, PropTypes } from 'react';
import VAlign from './VAlign';

class MainMenuListItem extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  render() {
    const { label, onClick } = this.props;

    return (
      <li className="menu-list-item" onClick={onClick}>
        <div className="menu-list-item-flair" />
        <VAlign className="menu-list-item-text">
          {label}
        </VAlign>
      </li>
    );
  }
}

export default MainMenuListItem;
