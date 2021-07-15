export const yourScore = document.querySelector('[data-your-score]');
export const computerScore = document.querySelector('[data-computer-score]');
export const finalColumn = document.querySelector('[data-column]');

export const resetGame = () => {
  yourScore.innerText = 0;
  computerScore.innerText = 0;
  const resultsDiv = document.querySelectorAll('.show-result');
  resultsDiv.forEach((div) => {
    div.remove();
  });
};

export const showSelectionResult = (selection, winner) => {
  const div = document.createElement('div');
  div.innerText = selection.emojy;
  div.classList.add('show-result');
  if (winner) {
    div.classList.add('winner');
  }
  finalColumn.after(div);
};

export const showWinner = () => {
  if (+yourScore.innerText === 3) {
    return alert('YOU WIN');
  } else if (+computerScore.innerText === 3) {
    return alert('YOU LOSE');
  } else {
    return;
  }
};
