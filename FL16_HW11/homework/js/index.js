const content = window.document.querySelector('#content');

function visitLink(path) {
  if (path) {
    const count = +window.localStorage.getItem(path);
    localStorage.setItem(path, count + 1);
  } else {
    return;
  }
}

const page1 = localStorage.getItem('Page1');
const page2 = localStorage.getItem('Page2');
const page3 = localStorage.getItem('Page3');

function viewResults() {
  content.insertAdjacentHTML(
    'beforeEnd',
    `<ul>
    <li>You visited Page3 ${page3}</li>
    <li>You visited Page1 ${page1}</li>
    <li>You visited Page2 ${page2}</li>
    </ul>`
  );

  return localStorage.clear();
}
