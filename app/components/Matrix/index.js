/**
 *
 * Matrix.js
 *
 * Our matrix will give the command to construct the whole matrix array dinamically (it will count the number of cells
  per row sent through props)
 */

import React from 'react';
import PropTypes from 'prop-types';
import Cell from 'components/Cell';

function Matrix(props) {
  const constructCell = (position) => (
    <Cell
      clickCell={props.handleCellClick}
      value={props.gameState ? props.gameState.get(position) : null}
      position={position}
    />
  );

  return (
    <div>
      <div>
        {constructCell(0)}
        {constructCell(1)}
        {constructCell(2)}
      </div>
      <div>
        {constructCell(3)}
        {constructCell(4)}
        {constructCell(5)}
      </div>
      <div>
        {constructCell(6)}
        {constructCell(7)}
        {constructCell(8)}
      </div>
    </div>

  );
}

Matrix.propTypes = {
  handleCellClick: PropTypes.func,
  gameState: PropTypes.object,
};

export default Matrix;
