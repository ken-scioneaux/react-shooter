import React, { Component, PropTypes } from 'react';
import MenuListItem from './MenuListItem';

class MenuList extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
    })).isRequired
  };

  render() {
    const { options } = this.props;

    return (
      <ul className="menu-list">
        {options.map((menuItem, i) => {
          return (
            <MenuListItem key={i}
              label={menuItem.label}
              onClick={menuItem.onClick}
            />
          );
        })}
      </ul>
    );
  }
}

export default MenuList;
