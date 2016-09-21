import React, { Component, PropTypes } from 'react';
import MainMenuListItem from './MainMenuListItem';

class MainMenuList extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
    })).isRequired
  };

  render() {
    const { options } = this.props;

    return (
      <ul className="main-menu-list">
        {options.map((menuItem, i) => {
          return (
            <MainMenuListItem key={i}
              label={menuItem.label}
              onClick={menuItem.onClick}
            />
          );
        })}
      </ul>
    );
  }
}

export default MainMenuList;
