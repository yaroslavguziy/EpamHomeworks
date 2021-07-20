import { getTweets, setTweets } from './locale-storage.js';
import { showMessage, hideMessage, hideTweets } from './show-hide.js';
import { manageButtons } from './manage-buttons.js';
import { modifyItemInputEl } from './index.js';

export const tweetsListEl = document.getElementById('list');
export const alertMessageTextEl = document.getElementById('alertMessageText');

export function upsertTweets() {
  let tweets = Object.values(getTweets());
  let dom = '';
  tweets
    .filter(({ like }) => location.hash === '#/liked' ? like : true)
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
  <li class="${like ? 'tweet-flex liked' : 'tweet-flex '}">
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

export function likeTweet(id) {
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

export function removeTweet(id) {
  let tweets = getTweets();
  delete tweets[id];
  setTweets(tweets);
  upsertTweets();
  manageButtons();
}

export function editTweet(id) {
  let tweets = getTweets();
  location.hash = `/edit/${id}`;
  modifyItemInputEl.value = tweets[id].name;
  hideTweets();
}
