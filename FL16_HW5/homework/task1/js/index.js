const userList = document.getElementById('userList');

const getUsers = fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((json) =>
    json.forEach((user) => {
      console.log(user);
      userList.insertAdjacentHTML(
        'afterbegin',
        `
      <li> 
      <p>${user.id}</p>
      <p>${user.name}</p>
      <p>${user.username}</p>
      <p>${user.email}</p>
      </li>
      `
      );
    })
  );

const editUser = fetch('https://jsonplaceholder.typicode.com/users/10', {
  method: 'PUT',
  body: JSON.stringify({
    id: 10,
    name: 'Valera',
    username: 'valerchick',
    email: 'valera@gmail.com',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

const deleteUser = fetch('https://jsonplaceholder.typicode.com/users/1', {
  method: 'DELETE',
});
