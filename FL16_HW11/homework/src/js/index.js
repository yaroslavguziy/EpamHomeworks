import { getTweets, setTweets, TWEETS } from './locale-storage.js';
import { showTweets, hideTweets, showMessage, hideMessage } from './show-hide';
import { manageButtons, navigationButtonsEl } from './manage-buttons';
import { upsertTweets, tweetsListEl, likeTweet, removeTweet, editTweet, alertMessageTextEl } from './manage-tweets.js';
import '../scss/styles.scss';

export const modifyItemInputEl = document.getElementById('modifyItemInput');
const cancelModificationEl = document.getElementById('cancelModification');
const saveModifiedItemEl = document.getElementById('saveModifiedItem');
const modifyItemHeader = document.getElementById('modifyItemHeader');

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
    const like = typeof tweets[id] === 'object' ? tweets[id].like : false;

    setTweets(
      Object.assign({}, tweets, {
        [id]: { id, name: modifyItemInputEl.value, like, date: new Date() }
      })
    );
    location.hash = '';
    upsertTweets();
  }
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
