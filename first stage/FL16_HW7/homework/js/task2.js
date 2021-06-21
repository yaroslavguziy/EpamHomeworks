if (confirm('Do you want to play a game?')) {
  let step = 1;
  let totalPrize = 0;
  let prizes = [100, 50, 25];
  let lastNumber = 8;
  let attempt = 3;
  let currentPrize = 0;

  let firstStep = (step, lastNumber, prizes, totalPrize) => {
    return step, lastNumber, prizes, totalPrize;
  };

  do {
    let random = Math.floor(Math.random() * (lastNumber + 1));

    for (let i = 0; i < attempt; i++) {
      let number = prompt(
        `Choose a roulette number from 0 to ${lastNumber}
Attempt left: ${attempt - i}
Total prize: ${totalPrize}$
Possible prize on current attempt: ${prizes[i]}$`,
        ''
      );

      if (random === +number) {
        currentPrize = prizes[i];
        totalPrize = totalPrize + currentPrize;
        i = 3;

        if (confirm(`Congratulation, you won! Your prize is: ${currentPrize}$. Do you want to continue?`)) {
          step++;
          lastNumber = lastNumber + 4;
          prizes = prizes.map((prize) => prize * 2);
          attempt = 3;
        } else {
          alert(`Thank you for your participation. Your prize is: ${totalPrize}$`);
          if (confirm('Do you want to play again?')) {
            firstStep();
          } else {
            step = 0;
          }
        }
      } else if (number === null) {
        i = 3;
        step = 0;
      } else if (i === 2) {
        alert(`Thank you for your participation. Your prize  is: ${totalPrize}$`);
        if (confirm('Do you want to play again?')) {
          firstStep();
        } else {
          step = 0;
        }
      }
    }
  } while (step);
} else {
  alert('You did not become a billionaire, but can.');
}
