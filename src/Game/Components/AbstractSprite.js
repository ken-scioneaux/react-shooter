import React, { Component, PropTypes } from 'react';
import { Sprite } from 'react-game-kit';

/**
 * "Sprites" in React-Game-Kit are tied to a sprite sheets that are tiled exact same sized cells.
 *
 * The source sprite sheet ('src' prop) are a series of rows and cols...
 *   - In a given row ('state' prop), each column is tied to a frame in an animation
 *     - Note that length in the cols for this row is denoted in the ('steps' prop)
 *   - All cells (at a given row/col) are required to be the same size (tileHeight/tileWidth props)
 */
class AbstractSprite extends Component {
  static propTypes = {
    /** Sprite sheet source - Sprite sheets *can* be a single frame */
    src: PropTypes.string.isRequired,
    /** How tall (y) a "sprite cell" is */
    tileHeight: PropTypes.number.isRequired,
    /** How wide (x) a "sprite cell" is */
    tileWidth: PropTypes.number.isRequired,
    /** Top-Left Offset, Array of 2 length, [x, y] */
    offset: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    /** Vertical position (Row number) in the sprite sheet */
    state: PropTypes.number.isRequired,
    /** How many "sprite cells" are on each row (index being the 'state' prop) */
    steps: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    /** What to scale the image to (related to tile height/width size) **/
    scale: PropTypes.number,
    /** Repeat is for animations (multiple "steps" in a row) */
    repeat: PropTypes.bool,
    /** For animations (@see repeat), the number of loop ticks per animation frame */
    ticksPerFrame: PropTypes.number,
    /** A callback for when the sprite plays (not 100% sure) */
    onPlayStateChanged: PropTypes.func,
  };
  static defaultProps = {
    scale: 1,
    repeat: false,
    ticksPerFrame: 0,
    onPlayStateChanged: undefined,
  };

  render() {
    const { ...spriteProps } = this.props;
    return (
      <Sprite
        { ...spriteProps }
      />
    )
  }
}

export default AbstractSprite;
