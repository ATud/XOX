/*
 * XOXGame
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import Matrix from 'components/Matrix';
import { validateGame, validateUndecided } from 'utils/gameValidation';
import CenteredSection from './CenteredSection';
import { makeSelectGameState, getPlayer, getGameOverStatus, getUndecidedStatus } from './selectors';
import { setGameStatePosition, setNextPlayer, setGameOver, setGameUndecided, resetGameState } from './actions';

import messages from './messages';
import reducer from './reducer';
import saga from './saga';

const GameOverDiv = styled.div`
  color: red;
  position: absolute;
  opacity: 0.6;
  font-size: 6em;
  @media (max-width: 480px) {
    font-size: 3em;
  }
`;

const ClickableSpan = styled.span`
    display: flex;
    justify-content: space-around;
    font-size: 0.5em!important;
    color: black;
    background-color: gray;
    border-radius: 10px;
    font-weight: bold;
    cursor: pointer;
`;

const LooserSpan = styled.span`
    display: flex;
    justify-content: space-around;
    font-size: 0.2em!important;
    color: white;
    background-color: black;
`;

export class XOXGame extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidUpdate() {
    const gameOver = validateGame(this.props.gameState);
    const gameUndecided = validateUndecided(this.props.gameState);
    if (gameOver) {
      this.props.setGameOver();
    } else if (gameUndecided) {
      this.props.setGameUndecided();
    }
  }

  handleCellClick = (index) => {
    if (this.props.gameOver) {
      alert('Game is already Over');
    } else if (!this.props.gameState.get(index)) {
      this.props.setGameStatePosition(index, this.props.player);
      this.props.setNextPlayer();
    } else {
      alert('Already Played That');
    }
  }

  renderGameOverImage = () => (
    <GameOverDiv>
      <FormattedMessage {...messages.gameOver} />
      <ClickableSpan onClick={this.props.resetGameState}>
        <FormattedMessage {...messages.resetGame} />
      </ClickableSpan>
      <LooserSpan> =={this.props.player}== PLAYER LOST !!! TO BADD !!! </LooserSpan>
    </GameOverDiv>
  );

  renderGameUndecided = () => (
    <GameOverDiv>
      <FormattedMessage {...messages.undecided} />
      <ClickableSpan onClick={this.props.resetGameState}>
        <FormattedMessage {...messages.resetGame} />
      </ClickableSpan>
    </GameOverDiv>
  );

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
          {this.props.gameOver ? this.renderGameOverImage() : null}
          {this.props.undecided ? this.renderGameUndecided() : null}
        </CenteredSection>
      </article>
    );
  }
}

XOXGame.propTypes = {
  setGameStatePosition: PropTypes.func,
  setGameUndecided: PropTypes.func,
  resetGameState: PropTypes.func,
  setGameOver: PropTypes.func,
  setNextPlayer: PropTypes.func,
  gameState: PropTypes.object,
  player: PropTypes.string,
  gameOver: PropTypes.bool,
  undecided: PropTypes.bool,
};

export function mapDispatchToProps(dispatch) {
  return {
    setGameStatePosition: (position, player) => dispatch(setGameStatePosition(position, player)),
    setNextPlayer: () => dispatch(setNextPlayer()),
    setGameOver: () => dispatch(setGameOver()),
    resetGameState: () => dispatch(resetGameState()),
    setGameUndecided: () => dispatch(setGameUndecided()),
  };
}

const mapStateToProps = createStructuredSelector({
  gameState: makeSelectGameState(),
  undecided: getUndecidedStatus(),
  player: getPlayer(),
  gameOver: getGameOverStatus(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'game', reducer });
const withSaga = injectSaga({ key: 'game', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(XOXGame);
