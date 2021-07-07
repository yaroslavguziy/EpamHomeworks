const userList = document.getElementById('userList');
const spinner = document.getElementById('spinner');

function showUsers(user) {
  userList.insertAdjacentHTML(
    'afterbegin',
    `
  <li> 
  <input field="name" class="info" value="${user.name}"/> 
  <input field="username" class="info" value="${user.username}"/> 
  <input field="email" class="info" value="${user.email}"/> 
  <button value="${user.id}" delete="delete">delete</button>
  </li>
  `
  );
}

const getUsers = fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((json) =>
    json.forEach((user) => {
      showUsers(user);

      const inputsEl = document.querySelectorAll('input');
      inputsEl.forEach((input) => {
        if (!input.getAttribute('userid')) {
          input.setAttribute('userid', user.id);
          input.onchange = ({ target }) => {
            spinner.className = 'spinner';
            editUser(Object.assign({}, user, { [target.getAttribute('field')]: target.value }))
              .then((response) => response.json())
              .finally(() => spinner.classList.remove('spinner'));
          };
        }
      });
    })
  )
  .finally(() => {
    spinner.className = 'spinner';
    setTimeout(() => {
      spinner.classList.remove('spinner');
    }, 2000);
  });

userList.addEventListener('click', deleteClick);

function deleteClick({ target }) {
  if (target.hasAttribute('delete')) {
    spinner.className = 'spinner';
    deleteUser(target.value)
      .then(() => target.closest('li').remove())
      .finally(() => spinner.classList.remove('spinner'));
  }
}

const editUser = (user) =>
  fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`, {
    method: 'PUT',
    body: JSON.stringify(user),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  });

const deleteUser = (id) =>
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    method: 'DELETE'
  }).then((response) => response.json());
