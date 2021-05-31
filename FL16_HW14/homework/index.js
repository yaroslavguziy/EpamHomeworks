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
    table.className = 'green';
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

/* END TASK 3 */
