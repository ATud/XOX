/**
 *
 * Cell.js
 *
 * Basic unit that knows nothing about the Matrix, just has a function that sends data regarding who clicked this.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
const Span = styled.span`
  width: 4em;
  height: 4em;
  background-color: gray;
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  padding: 8px;
  font-weight: bold;
  border: 1px white solid;
  color: white;
`;

function Cell(props) {
  return (
    <Span onClick={() => { props.clickCell(props.position); }} >
      {props.value ? props.value : ''}
    </Span>
  );
}

Cell.propTypes = {
  clickCell: PropTypes.func,
  position: PropTypes.number,
  value: PropTypes.string,
};

export default Cell;
