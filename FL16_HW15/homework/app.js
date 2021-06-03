const root = document.getElementById('root');
const addTweetEl = document.querySelector('.addTweet');
const modifyItem = document.getElementById('modifyItem');
const tweetItems = document.getElementById('tweetItems');
const cancelModificationEl = document.getElementById('cancelModification'); //cancel button
const saveModifiedItemEl = document.getElementById('saveModifiedItem'); // save button
const modifyItemInputEl = document.getElementById('modifyItemInput'); // textarea
const modifyItemHeader = document.getElementById('modifyItemHeader'); // header
const tweetsListEl = document.getElementById('list');
const TWEETS = 'tweets';

const removeButtonEl = document.querySelector('.remove');
const likeButtonEl = document.querySelector('.like');
const navigationButtonsEl = document.getElementById('navigationButtons');
const alertMessageEl = document.getElementById('alertMessage');
const alertMessageTextEl = document.getElementById('alertMessageText');

function getTweets() {
  return JSON.parse(localStorage.getItem(TWEETS) || '{}');
}
function setTweets(tweets) {
  localStorage.setItem(TWEETS, JSON.stringify(tweets));
}

function upsertTweets() {
  let tweets = Object.values(getTweets());
  let dom = '';
  tweets
    .filter(({ like }) => (location.hash === '#/liked' ? like : true))
    .sort((a, b) => {
      if (a.date > b.date) {
        return -1;
      } else if (a.date < b.date) {
        return 1;
      } else {
        return 0;
      }
    })
    .forEach(({ name, id, like }) => {
      dom =
        dom +
        `
  <li class="tweet-flex">
    <button value="${id}" class="tweet-text">${name}</button>
    <div>
      <button value="${id}" class="remove">remove</button>
      <button value="${id}" class="like">${like ? 'unlike' : 'like'}</button>
    </div>
  </li> 
  `;
    });

  tweetsListEl.innerHTML = '';
  tweetsListEl.insertAdjacentHTML('afterbegin', dom);
}

function manageButtons() {
  if (location.hash === '#/liked') {
    navigationButtonsEl.innerHTML = '';
    navigationButtonsEl.insertAdjacentHTML('beforeend', `<button class="back">back</button>`);
  } else {
    const isLiked = Object.values(getTweets()).some(({ like }) => like);
    navigationButtonsEl.innerHTML = '';
    navigationButtonsEl.insertAdjacentHTML('beforeend', `<button class="addTweet">Add Tweet</button>`);
    if (isLiked) {
      navigationButtonsEl.insertAdjacentHTML('beforeend', `<button class="liked-tweets">go to liked</button>`);
    } else {
      navigationButtonsEl.insertAdjacentHTML('beforeend', `<button class="addTweet">Add Tweet</button>`);
      navigationButtonsEl.lastChild.remove();
    }
  }
}

function showMessage() {
  alertMessageEl.style.display = 'block';
  alertMessageEl.classList.add('show-error');
}

function hideMessage() {
  alertMessageEl.style.display = 'none';
}

function showTweets() {
  modifyItem.style.display = 'none';
  tweetItems.style.display = 'block';
}
function hideTweets() {
  modifyItem.style.display = 'block';
  tweetItems.style.display = 'none';
}

function addTweet() {
  showTweets();

  if (!localStorage.getItem(TWEETS)) {
    setTweets({});
  }

  if (
    modifyItemInputEl.value === '' ||
    Object.values(getTweets()).some(({ name }) => name === modifyItemInputEl.value)
  ) {
    hideTweets();
    alertMessageTextEl.textContent = `Error! You can't tweet about that`;
    showMessage();
    setTimeout(hideMessage, 2000);
  } else {
    const id = +location.hash.split('/')[2] || Object.keys(getTweets()).length;
    let tweets = getTweets();
    setTweets({
      ...tweets,
      [id]: { id, name: modifyItemInputEl.value, like: tweets[id]?.like || false, date: new Date() },
    });
    location.hash = '';
    upsertTweets();
  }
}

function removeTweet(id) {
  let tweets = getTweets();
  delete tweets[id];
  setTweets(tweets);
  upsertTweets();
  manageButtons();
}

function likeTweet(id) {
  let tweets = getTweets();
  tweets[id].like = !tweets[id].like;
  if (tweets[id].like) {
    alertMessageTextEl.textContent = `Hooray! You liked tweet with id ${tweets[id].id}!`;
    showMessage();
    setTimeout(hideMessage, 2000);
  }
  setTweets(tweets);
  upsertTweets();
  manageButtons();
}

function editTweet(id) {
  let tweets = getTweets();
  location.hash = `/edit/${id}`;
  modifyItemInputEl.value = tweets[id].name;
  hideTweets();
}

saveModifiedItemEl.addEventListener('click', addTweet);

cancelModificationEl.addEventListener('click', () => {
  showTweets();
  location.hash = '';
  upsertTweets();
});

tweetsListEl.addEventListener('click', ({ target }) => {
  if (target.className === 'remove') {
    removeTweet(target.value);
  } else if (target.className === 'like') {
    likeTweet(target.value);
  } else if (target.className === 'tweet-text') {
    editTweet(target.value);
  }
});

navigationButtonsEl.addEventListener('click', ({ target }) => {
  if (target.className === 'liked-tweets') {
    location.hash = '/liked';
  } else if (target.className === 'addTweet') {
    location.hash = '/add';
    hideTweets();
    modifyItemHeader.textContent = 'Add tweet';
    modifyItemInputEl.value = '';
  } else if (target.className === 'back') {
    location.hash = '';
  }
  manageButtons();
  upsertTweets();
});

upsertTweets();
