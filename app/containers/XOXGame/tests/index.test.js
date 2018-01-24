/**
 * Test the XOXGame
 */

import React from 'react';
import { shallow } from 'enzyme';
import Matrix from 'components/Matrix';
import { XOXGame, mapDispatchToProps } from '../index';
import { setGameStatePosition } from '../actions';
// import { loadPlayers } from '../../App/actions';

describe('<XOXGame />', () => {
  it('should render the matrix needed for the xox game', () => {
    const renderedComponent = shallow(<XOXGame />);
    expect(renderedComponent.find(Matrix).length).toBe(1);
  });

  describe('mapDispatchToProps', () => {
    describe('setGameStatePosition', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.setGameStatePosition).toBeDefined();
      });

      it('should dispatch setGameStatePosition when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const position = 1;
        const player = 'X';
        result.setGameStatePosition(position, player);
        expect(dispatch).toHaveBeenCalledWith(setGameStatePosition(position, player));
      });
    });
  });
});
