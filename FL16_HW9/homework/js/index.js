import { randomSelection, SELECTIONS, gameScore, isWinner } from './game.js';
import { resetGame, yourScore, computerScore, showSelectionResult, showWinner } from './result.js';
import '../scss/styles.scss';

const gameButtons = document.querySelectorAll('[data-selection]');
const resetButton = document.querySelector('[data-reset]');

const makeSelection = (selection) => {
  const computerSelection = randomSelection();
  const youWinner = isWinner(selection, computerSelection);
  const computerWinner = isWinner(computerSelection, selection);

  showSelectionResult(computerSelection, computerWinner);
  showSelectionResult(selection, youWinner);
  youWinner ? gameScore(yourScore) : gameScore(computerScore);
  showWinner();
};

gameButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const buttonName = button.dataset.selection;
    const selection = SELECTIONS.find((selection) => selection.name === buttonName);
    makeSelection(selection);
  });
});

resetButton.addEventListener('click', resetGame);
