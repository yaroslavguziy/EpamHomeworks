/* START TASK 1: Your code goes here */
const table = document.getElementById('table');
const specialCell = document.getElementById('special');
const row = document.getElementsByTagName('tr');

table.addEventListener('click', (e) => {
  if (e.target.className === 'first') {
    e.target.closest('tr').className = 'blue';
  } else {
    e.target.className = 'yellow';
  }

  if (e.target === specialCell) {
    table.className = 'yellow';
  }
});

/* END TASK 1 */

/* START TASK 2: Your code goes here */

const phoneInput = document.getElementById('phone');
const sendButton = document.getElementById('button');
const expression = /^\+?3?8?(0\d{9})$/;
const message = document.getElementById('message');

function showValidMessage() {
  message.className = 'green';
  message.textContent = 'Data was successfully sent';
}
function showInvalidMessage() {
  message.className = 'red';
  phoneInput.style.border = '1px solid red';
  message.textContent = 'Type number does not follow format +380*********';
  sendButton.disabled = true;
}

function checkInput() {
  if (!expression.test(phoneInput.value)) {
    showInvalidMessage();
  } else {
    return;
  }
}
phoneInput.onchange = checkInput;
sendButton.addEventListener('click', showValidMessage);

/* END TASK 2 */

/* START TASK 3: Your code goes here */

const basketCourt = document.getElementById('basket-court');
const ball = document.getElementById('ball');
let countA = 0;
let countB = 0;
const teamA = document.getElementById('first-team');
const teamB = document.getElementById('second-team');
const scoreMessage = document.getElementById('score-message');

teamA.textContent = 0;
teamB.textContent = 0;

function getClickPosition(e) {
  const xPosition = e.clientX;
  console.log(xPosition);
  const yPosition = e.clientY;
  console.log(yPosition);
  const ballXPos = 760;
  const ballYPos = e.clientY;
  const clickX = xPosition - ballXPos;
  const clickY = yPosition - ballYPos;
  const translateValue = `translate( ${clickX + 'px'}, ${clickY + 'px'} )`;

  if (xPosition >= '500' && xPosition < '510') {
    ball.style.transform = translateValue;
    showMessageA();
    setTimeout(hideMessage, 3000);
  } else if (xPosition >= '1015' && xPosition <= '1025') {
    ball.style.transform = translateValue;
    showMessageB();
    setTimeout(hideMessage, 3000);

    ballBack();
  }
}
function ballBack() {
  ball.style.transform = `translate( ${0 + 'px'}, ${0 + 'px'} )`;
}

function hideMessage() {
  scoreMessage.style.display = 'none';
}

function showMessageA() {
  teamA.textContent = ++countA;
  scoreMessage.style.display = 'block';
  scoreMessage.textContent = 'Team A scored';
}
function showMessageB() {
  teamB.textContent = ++countB;
  scoreMessage.style.display = 'block';
  scoreMessage.textContent = 'Team B scored';
}

basketCourt.addEventListener('click', getClickPosition);

/* END TASK 3 */
