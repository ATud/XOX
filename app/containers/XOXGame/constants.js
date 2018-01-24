/*
 * GameConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */
export const GAME_SIZE = 3;
export const UPDATE_GAMESTATE = 'Game/UPDATE_GAMESTATE';
export const SET_NEXT_PLAYER = 'Game/SET_NEXT_PLAYER';
export const SET_GAME_OVER = 'Game/SET_GAME_OVER';
export const RESET_GAME_STATE = 'Game/RESET_GAME_STATE';
