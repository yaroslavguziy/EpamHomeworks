let socket = new WebSocket('ws://localhost:8080');
const messagesWindowEl = document.getElementById('messages');

const userName = prompt('Enter your name', '');

//send message
document.forms.userMessage.onsubmit = function () {
  const data = { date: new Date(), message: this.message.value, userName };
  socket.send(JSON.stringify(data));
  showMessage(data);
  this.message.value = '';
  return false;
};

//get message
socket.onmessage = function ({ data }) {
  // showMessage(Object.assign({}, JSON.parse(data)), (sender = 'partner'));
  showMessage(Object.assign({}, JSON.parse(data), { sender: 'partner' }));
};

// showMessage(Object.assign({}, JSON.parse(data)), (sender = 'partner'));

function showMessage({ message, date, userName, sender = 'owner' }) {
  const date1 = new Date(date);
  messagesWindowEl.insertAdjacentHTML(
    'afterbegin',
    `
   <div class="container${sender === 'owner' ? ' right' : ''}">
   <div>${userName}</div>
   <div>${message}</div>
   <div>${date1.getHours()}:${date1.getMinutes()}</div>
   </div>

  `
  );
}
