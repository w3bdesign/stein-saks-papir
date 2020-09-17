function CheckWinner(selection, opponentSelection) {
  return selection.beats === opponentSelection.name;
}

export default CheckWinner;
