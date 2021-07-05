const socket = new WebSocket('ws://localhost:8080');
const messagesWindow = document.getElementById('messages');

//send message
document.forms.publish.onsubmit = function () {
  const sendingMessage = this.massage.value;

  socket.send(sendingMessage);
  return false;
};

//get message
socket.onmessage = function (e) {
  const comingMessage = e.data;
  showMessage(comingMessage);
};

//show message

function showMessage(message) {
  messagesWindow.insertAdjacentHTML('afterbegin', `<div>${message}</div>`);
}
