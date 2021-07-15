export const SELECTIONS = [
  {
    name: 'rock',
    emojy: '✊🏼',
    beats: 'scissors',
  },
  {
    name: 'paper',
    emojy: '✋🏼',
    beats: 'rock',
  },
  {
    name: 'scissors',
    emojy: '✌🏼',
    beats: 'paper',
  },
];

export const randomSelection = () => {
  const randomIndex = Math.floor(Math.random() * SELECTIONS.length);
  return SELECTIONS[randomIndex];
};

export const isWinner = (selection, computerSelection) => {
  return selection.beats === computerSelection.name;
};

export const gameScore = (score) => {
  if (+score.innerText < 3) {
    score.innerText = +score.innerText + 1;
  } else {
    return;
  }
};
