export const validateGame = (gameState) => {
  const winningStrikes = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 9],
  ];
  const check = winningStrikes.filter((subarray) => {
    const [pos1, pos2, pos3] = subarray;
    return gameState.get(pos1) && (gameState.get(pos1) === gameState.get(pos2)) && (gameState.get(pos1) === gameState.get(pos3));
  });
  return check.length;
};

export const validateUndecided = (gameState) => (gameState.filter((item) => item === null).size < 1);
