export const validateGame = (gameState) => {
  const winningStrikes = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 5, 9],
    [3, 5, 7],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
  ];
  const check = winningStrikes.filter((subarray) => {
    const [pos1, pos2, pos3] = subarray;
    return gameState.get(pos1) && (gameState.get(pos1) === gameState.get(pos2)) && (gameState.get(pos1) === gameState.get(pos3));
  });
  return check.length;
};
