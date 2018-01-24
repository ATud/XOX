/*
 * XOXGame
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import Matrix from 'components/Matrix';
import CenteredSection from './CenteredSection';
import { makeSelectGameState, getPlayer } from './selectors';
import { setGameStatePosition, setNextPlayer } from './actions';

import reducer from './reducer';
import saga from './saga';

export class XOXGame extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  handleCellClick = (index) => {
    if (!this.props.gameState.get(index)) {
      this.props.setGameStatePosition(index, this.props.player);
      this.props.setNextPlayer();
    } else {
      alert('Already Played That');
    }
  }

  render() {
    return (
      <article>
        <Helmet>
          <title>XOX Game</title>
          <meta name="description" content="A XOX Game" />
        </Helmet>
        <CenteredSection>
          <Matrix
            gameState={this.props.gameState}
            handleCellClick={this.handleCellClick}
          ></Matrix>
        </CenteredSection>
      </article>
    );
  }
}

XOXGame.propTypes = {
  setGameStatePosition: PropTypes.func,
  setNextPlayer: PropTypes.func,
  gameState: PropTypes.object,
  player: PropTypes.string,
};

export function mapDispatchToProps(dispatch) {
  return {
    setGameStatePosition: (position, player) => dispatch(setGameStatePosition(position, player)),
    setNextPlayer: () => dispatch(setNextPlayer()),
  };
}

const mapStateToProps = createStructuredSelector({
  gameState: makeSelectGameState(),
  player: getPlayer(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'game', reducer });
const withSaga = injectSaga({ key: 'game', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(XOXGame);
